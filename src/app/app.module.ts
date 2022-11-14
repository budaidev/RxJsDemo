import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NasdaqListComponent } from './nasdaq-list/nasdaq-list.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { AddNumbersComponent } from './add-numbers/add-numbers.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NasdaqListComponent,
    AddNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'nasdaq-list', component: NasdaqListComponent},
      {path: 'add-number', component: AddNumbersComponent},
    ]),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
