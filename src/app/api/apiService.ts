import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {RoomsForRent} from "./rooms-for-rent";
import {UserInfo} from "./user-info";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  sayHi(): Observable<string> {
    return this.http.get<string>('http://localhost:4200/api/sayHi');
  }

  getRoom(id: number): Observable<RoomsForRent> {
    return this.http.get<RoomsForRent>('http://localhost:4200/api/rent/' + id)
  }

  sendUser(userInfo: UserInfo): Observable<UserInfo> {
    return this.http.post<UserInfo>('http://localhost:4200/api/ty' , userInfo);
  }

  sendRoom(room: RoomsForRent): Observable<RoomsForRent> {
    return this.http.post<RoomsForRent>('http://localhost:4200/api/room', room)
  }
}
