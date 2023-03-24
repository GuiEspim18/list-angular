import { Component, Inject } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BadgeService } from 'src/app/shared/services/badge.service';
import { IBadge } from 'src/app/shared/utils/interfaces/badge/badge.interface';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ITable } from 'src/app/shared/utils/interfaces/table/table.interface';
import { ListService } from 'src/app/shared/services/list.service';
import { OpenDialogService } from 'src/app/shared/services/open-dialog.service';

@Component({
  selector: 'app-set-badge-dialog',
  templateUrl: './set-badge-dialog.component.html',
  styleUrls: ['./set-badge-dialog.component.scss']
})
export class SetBadgeDialogComponent implements OnInit {

  public badges: Array<IBadge> = new Array();

  public readonly form: FormGroup = new FormGroup({
    "badge": new FormControl(null, [Validators.required])
  })

  public list: ITable;


  constructor(private readonly badgeService: BadgeService, @Inject(MAT_DIALOG_DATA) public data: ITable, public readonly listService: ListService) { }


  public ngOnInit(): void {
    this.populate();
  }


  /* Populate badges */
  private populate(): void {
    this.badgeService.currentBadgeInfo.subscribe((element: Array<IBadge>) => {
      this.badges = element;
      this.list = this.data
      if (element.length === 0) this.form.get('badge')?.disable();
    })
  }


  /* Submit form */
  public submit(form: FormGroup): void {
    if (form.valid) {
      this.listService.currentListInfo.subscribe((element: Array<ITable>) => {
        const value = form.value.badge;
        const index: number = element.findIndex((el: ITable) => el.name === this.list.name);
        const badge: Array<any> = element[index].badge;
        const badgeExists: number = badge.findIndex((badgeIndex: IBadge) => badgeIndex.name === value.name);
        if (badgeExists === -1) this.list.badge.push(value);
      })
    }
  }

}
