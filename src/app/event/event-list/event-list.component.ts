import {Component} from '@angular/core';
import {Table} from "primeng/table";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent {
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
    }]

  clear(table: Table) {
    table.clear();
  }
}
