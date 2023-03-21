import { Component, Input  } from '@angular/core';
import { ITable } from '../interfaces/table/table.interface';
import { table } from '../mocs/table/table.moc';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  public readonly displayedColumns: Array<string> = table;

  @Input() public dataSource: Array<ITable | any> = new Array();


  /* Delete item */

  public delete(i: number): void {
    this.dataSource.splice(i, 1)
  }

}
