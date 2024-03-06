import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.scss']
})
export class EventCreateComponent implements OnInit {
  eventForm!: FormGroup;
  constructor(public dialogRef: DynamicDialogRef) { }

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
    this.dialogRef.destroy();
  }
}
