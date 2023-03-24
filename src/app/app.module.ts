import { AngularMaterialModule } from './shared/modules/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/utils/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextInputComponent } from './shared/utils/text-input/text-input.component';
import { CardComponent } from './shared/utils/card/card.component';
import { ButtonComponent } from './shared/utils/button/button.component';
import { ImportsModule } from './shared/modules/imports/imports.module';
import { TableComponent } from './shared/utils/table/table.component';
import { IconButtonComponent } from './shared/components/icon-button/icon-button.component';
import { SearchInputComponent } from './shared/utils/search-input/search-input.component';
import { AddBadgeDialogComponent } from './shared/components/dialogs/add-badge-dialog/add-badge-dialog.component';
import { DialogHeaderComponent } from './shared/components/dialog-header/dialog-header.component';
import { SetBadgeDialogComponent } from './shared/components/dialogs/set-badge-dialog/set-badge-dialog.component';
import { BadgeComponent } from './shared/utils/badge/badge.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TextInputComponent,
    CardComponent,
    ButtonComponent,
    TableComponent,
    IconButtonComponent,
    SearchInputComponent,
    AddBadgeDialogComponent,
    DialogHeaderComponent,
    SetBadgeDialogComponent,
    BadgeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ImportsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
