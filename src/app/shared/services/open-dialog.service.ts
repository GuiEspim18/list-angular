import { ComponentType } from '@angular/cdk/overlay';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class OpenDialogService {

  public dialogRef: MatDialogRef<ComponentType<any>>


  constructor(public dialog: MatDialog) { }


  public open(component: ComponentType<any>, data?: any): void {
    let dataObj: any = undefined;
    if (data) dataObj = { data: data };
    const dialogRef: MatDialogRef<ComponentType<any>> = this.dialog.open(component, dataObj);
    this.dialogRef = dialogRef
  }

}
