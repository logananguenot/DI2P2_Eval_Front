import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DynamicDialogRef} from "primeng/dynamicdialog";
import {IEvent} from "../../interfaces/ievent";
import {EventServiceService} from "../../services/events/event-service.service";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  eventForm!: FormGroup;
  constructor(
    public dialogRef: DynamicDialogRef,
    private _eventService: EventServiceService
  ) { }

  ngOnInit(): void {
    this.eventForm = new FormGroup({
      title: new FormControl(''),
      description: new FormControl(''),
      date: new FormControl(''),
      location: new FormControl(''),
    });
  }

  onSubmitAdd() {
    const eventFormData = this.eventForm.value;
    const newEvent: IEvent = {
      Title: eventFormData.title,
      Description: eventFormData.description,
      Date: eventFormData.date,
      Location: eventFormData.location
    }
    this._eventService.addEvent(newEvent).then((result) => {
      this.dialogRef.destroy();
    });
  }
}
