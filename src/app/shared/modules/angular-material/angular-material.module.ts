import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';

const modules: Array<any> = [
  CommonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatIconModule,
  MatTooltipModule,
  MatDialogModule,
  MatSelectModule,
  MatBadgeModule
];

@NgModule({
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class AngularMaterialModule { }
