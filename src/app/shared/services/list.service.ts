import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITable } from '../utils/interfaces/table/table.interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private readonly listInfo: BehaviorSubject<any> = new BehaviorSubject([])

  public currentListInfo: Observable<Array<ITable>> = this.listInfo.asObservable();

  private originalList: Array<ITable> = new Array();

  private currentList: Array<ITable> = new Array();

  private filterBefore: string = "";


  constructor() {
    this.populate();
  }


  /* Populating */
  private populate(): void {
    this.currentListInfo.subscribe((element: Array<ITable>) => {
      if (element.length > 0) {
        this.currentList = element
        this.originalList = element
      }
    })
  }


  /* Set badges */
  public set(obj: ITable): void {
    this.currentListInfo.subscribe((element: Array<ITable>) => {
      const find: number = element.findIndex((element: ITable) => element.name.toLowerCase() === obj.name.toLowerCase())
      if (find === -1) {
        element.push(obj)
      } else {
        alert(`${obj.name} is already added in the list.`)
      }
      this.currentList = element
      this.originalList = element
    })
  }


  /* Find badges */
  public find(value: any): Array<ITable> {
    const str: string = value.target.value;
    if (str.length > 0) {
      if (str.length > this.filterBefore.length) {
        this.currentList = this.originalList.filter((element: ITable) => `${element.name}`.toUpperCase().includes(str.toUpperCase()));
        this.filterBefore = str;
      } else {
        this.currentList = this.originalList.filter((element: ITable) => `${element.name}`.toUpperCase().includes(str.toUpperCase()));
        this.filterBefore = str;
      }
    } else {
      this.currentList = this.originalList
    }
    return this.currentList
  }

}
