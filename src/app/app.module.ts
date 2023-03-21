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
import { ImportsModule } from './shared/modules/imports/imports/imports.module';
import { TableComponent } from './shared/utils/table/table.component';
import { IconButtonComponent } from './shared/components/icon-button/icon-button.component';

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
