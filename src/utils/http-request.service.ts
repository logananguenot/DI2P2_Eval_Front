import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HttpRequestService {

  constructor(private _httpClient: HttpClient) { }

  public get<T>(path: string, params: HttpParams = new HttpParams()) {
    return this._httpClient.get<T>(environment.apiEndpoint + path, {params: params});
  }

  public post<T>(path: string, params: object)  {
    return this._httpClient.post<T>(environment.apiEndpoint + path, params);
  }

  public delete<T>(path: string, params: object) {
    return this._httpClient.delete<T>(environment.apiEndpoint + path, params);
  }

  public update<T>(path: string, params: object) {
    return this._httpClient.put<T>(environment.apiEndpoint + path, params);
  }
}
