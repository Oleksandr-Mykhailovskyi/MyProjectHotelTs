import { Injectable } from '@angular/core';
import {ApiService} from "../api/apiService";
import {RoomsForRent} from "../api/rooms-for-rent";
import {UserInfo} from "../api/user-info";
import {SendEmailCommand} from "../api/send-email-command";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private api: ApiService) {}

  sendUserInfo(userInfo: UserInfo): void {
    console.log('userInfo value ' + userInfo);
    this.api.sendUser(userInfo).subscribe(() => console.log('send user success'));
  }

  getRoom(id: number): void {
     this.api.getRoom(id).subscribe(() => console.log('get room success'));
  }

  sendRentRoom(room: RoomsForRent): void {
    this.api.sendRoom(room).subscribe(() => console.log('send room success'));
  }

  sendEmail(id: SendEmailCommand) {
    this.api.sendEmail(id).subscribe(() => console.log('send email success'));
  }

  test() {
    this.api.test();
  }

}
