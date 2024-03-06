import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {EventServiceService} from "../../services/events/event-service.service";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-event-edit',
  templateUrl: './event-edit.component.html',
  styleUrls: ['./event-edit.component.scss']
})
export class EventEditComponent implements OnInit {
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

  onSubmitEdit() {
    const eventFormData = this.eventForm.value;
    this._eventService.editEvent(eventFormData).then((result) => {
      this.dialogRef.destroy();
    });
  }
}
