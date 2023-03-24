import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { ListService } from '../../services/list.service';
import { ITable } from '../interfaces/table/table.interface';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {

  @Input() public placeholder: string = "";

  @Output() private readonly filter: EventEmitter<Array<ITable>> = new EventEmitter();


  constructor (public readonly listService: ListService) { }


  /* Find name */
  public find(event: any): void {
    const filtered: Array<ITable> = this.listService.find(event);
    this.filter.emit(filtered);
  }

}
