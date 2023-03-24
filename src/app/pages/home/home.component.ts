import { ComponentType } from '@angular/cdk/portal';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddBadgeDialogComponent } from 'src/app/shared/components/dialogs/add-badge-dialog/add-badge-dialog.component';
import { ListService } from 'src/app/shared/services/list.service';
import { OpenDialogService } from 'src/app/shared/services/open-dialog.service';
import { IBadge } from 'src/app/shared/utils/interfaces/badge/badge.interface';
import { IHomeForm } from 'src/app/shared/utils/interfaces/home-form/home-form.interface';
import { ITable } from 'src/app/shared/utils/interfaces/table/table.interface';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly form: FormGroup<IHomeForm> = new FormGroup({
    "add": new FormControl('')
  });

  public arr: Array<ITable> = new Array();

  public readonly component: ComponentType<any> = AddBadgeDialogComponent

  public badges: Array<IBadge> = new Array();
  

  constructor(public readonly openDialogService: OpenDialogService, private readonly listService: ListService) {}


  public ngOnInit(): void {
    this.popualte();
  }


  /* Submit form */
  public submit(form: FormGroup): void {
    if (form.value.add.length > 0) {
      const name: string = form.value.add
      this.form.reset();
      this.listService.set({name: name, badge: []})
    }
  }


  /* Populate arr */
  private popualte(): void {
    this.listService.currentListInfo.subscribe((element: Array<ITable>) => this.arr = element)
  }


  /* Getting filter events */
  public gettingEvent(event: any): void {
    this.arr = event
  }

}
