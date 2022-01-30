import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {RoomsForRent} from "./rooms-for-rent";
import {UserInfo} from "./user-info";
import {SendEmailCommand} from "./send-email-command";


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) {}

  test(): Observable<string> {
    return this.http.get<string>('http://localhost:4200/api/test');
  }

  getRoom(id: number): Observable<RoomsForRent> {
    return this.http.get<RoomsForRent>('http://localhost:4200/api/rent/' + id)
  }

  sendUser(userInfo: UserInfo): Observable<UserInfo> {
    console.log('user info value ' + userInfo);
    return this.http.post<UserInfo>('http://localhost:4200/api/info' , userInfo);
  }

  sendRoom(room: RoomsForRent): Observable<RoomsForRent> {
    console.log('room: ' + room);
    return this.http.post<RoomsForRent>('http://localhost:4200/api/room', room);
  }

  sendEmail(id: SendEmailCommand) : Observable<SendEmailCommand> {
    return this.http.post<SendEmailCommand>('http://localhost:4200/api/sendEmail', id);
  }
}
