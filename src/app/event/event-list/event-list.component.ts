import {Component, OnInit} from '@angular/core';
import {Table} from "primeng/table";
import {DialogService, DynamicDialogRef} from "primeng/dynamicdialog";
import {EventCreateComponent} from "../event-create/event-create.component";
import {IIEvent} from "../../interfaces/iievent";
import {EventServiceService} from "../../services/events/event-service.service";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit{
  eventData: IIEvent[] = [];

  ref: DynamicDialogRef | undefined;

  constructor(
    public dialogService: DialogService,
    private _eventService: EventServiceService
  ) {
  }

  ngOnInit() {
    this._eventService.getEvents().then(
      (data: IIEvent[]) => {
        this.eventData = data;
      }
    )
  }

  clear(table: Table) {
    table.clear();
  }

  showAddDialog() {
    this.ref = this.dialogService.open(EventCreateComponent, {header: 'Add a new Event'})
  }

  showEditDialog(event: IIEvent) {
    this.ref = this.dialogService.open(EventCreateComponent, {header: 'Edit Event', data: event})
  }

  deleteEvent(event: IIEvent) {
    this._eventService.deleteEvent(event).then((result) => {
      console.log(result)
    });
  }
}
