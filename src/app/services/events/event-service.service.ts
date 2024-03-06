import { Injectable } from '@angular/core';
import {IEvent} from "../../interfaces/ievent";
import {HttpRequestService} from "../../../utils/http-request.service";

@Injectable({
  providedIn: 'root'
})
export class EventServiceService {

  constructor(private _httpRequest: HttpRequestService) { }

  addEvent(event: IEvent) {
    return new Promise<IEvent>((resolve, reject) => {
      this._httpRequest.post<IEvent>('event/add', event).subscribe({
        next: (result) => {
          resolve(result);
        },
        error: (err) => {
          reject(err);
        },
      });
    })
  }
}
