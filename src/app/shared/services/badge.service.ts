import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IBadge } from '../utils/interfaces/badge/badge.interface';

@Injectable({
  providedIn: 'root'
})
export class BadgeService {

  private readonly badgeInfo: BehaviorSubject<any> = new BehaviorSubject([])

  public currentBadgeInfo: Observable<Array<IBadge>> =  this.badgeInfo.asObservable();

  constructor() { }


  /* Set badges */
  public set(obj: IBadge): void {
    this.currentBadgeInfo.subscribe((badgeInfo: Array<IBadge>) =>{ 
      const find: number = badgeInfo.findIndex((element: IBadge) => element.color === (obj.color || element.name === obj.name) && badgeInfo.length < 5 )
      if (find === -1) {
        badgeInfo.push(obj)
      } else {
        alert("this color or name of badge already exists")
      }
    })
  }

}
