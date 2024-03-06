import { Injectable } from '@angular/core';
import {IEvent} from "../../interfaces/ievent";
import {HttpRequestService} from "../../../utils/http-request.service";
import {IIEvent} from "../../interfaces/iievent";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private _httpRequest: HttpRequestService) { }

  addEvent(event: IEvent) {
    return new Promise<IEvent>((resolve, reject) => {
      this._httpRequest.post<IEvent>('Events', event).subscribe({
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
      return this._httpRequest.update<any>('/event', event).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (error) => {
          reject(error);
        },
      });
    });
  }
}
