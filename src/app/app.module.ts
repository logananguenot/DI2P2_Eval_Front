import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event/event-list/event-list.component';
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import { EventCreateComponent } from './event/event-create/event-create.component';
import {DialogModule} from "primeng/dialog";
import {DialogService} from "primeng/dynamicdialog";
import {ReactiveFormsModule} from "@angular/forms";
import { EventEditComponent } from './event/event-edit/event-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    EventCreateComponent,
    EventEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
