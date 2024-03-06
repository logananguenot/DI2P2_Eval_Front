import { Injectable } from '@angular/core';
import {IEvent} from "../../interfaces/ievent";
import {HttpRequestService} from "../../../utils/http-request.service";
import {IIEvent} from "../../interfaces/iievent";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private _httpRequest: HttpRequestService) { }


  getEvents() {
    return new Promise<IIEvent[]>((resolve, reject) => {
      this._httpRequest.get<IIEvent[]>('/Events').subscribe({
        next: (response) => resolve(response),
        error: (err) => reject(err),
      });
    });
  }

  addEvent(event: IEvent) {
    return new Promise<IEvent>((resolve, reject) => {
      this._httpRequest.post<IEvent>('/Events', event).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (err) => {
          reject(err);
        },
      });
    })
  }

  editEvent(event: IIEvent) {
    return new Promise<IIEvent>((resolve, reject) => {
      return this._httpRequest.update<any>('/Events', event).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }

  deleteEvent(event: IIEvent) {
    return new Promise<IIEvent>((resolve, reject) => {
      return this._httpRequest.delete<any>(`/Events`, event).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (err) => {
          reject(err);
        },
      });
    });
  }
}
