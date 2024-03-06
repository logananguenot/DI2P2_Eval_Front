import {Component, OnInit} from '@angular/core';
import {Table} from "primeng/table";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {EventCreateComponent} from "../event-create/event-create.component";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit{
  eventData = [
    {
    title: 'Event 1',
    description: 'I am a event description',
    date: '06/03/2024',
    location: 'Dijon'
    },
    {
      title: 'Event 2',
      description: 'I am a event description',
      date: '20/05/2020',
      location: 'Paris'
    },
    {
      title: 'Event 3',
      description: 'I am a event description',
      date: '01/01/2035',
      location: 'Lyon'
    }];

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {
  }

  ngOnInit() {
  }

  clear(table: Table) {
    table.clear();
  }

  showAddDialog() {
    console.log("opened")
    this.ref = this.dialogService.open(EventCreateComponent, {header: 'Add a new Event'})
  }
}
