import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {ApiService} from "../api/apiService";
import {RoomsForRent} from "../api/rooms-for-rent";
import {UserInfo} from "../api/user-info";


@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private api: ApiService) {}

  sendUserInfo(userInfo: UserInfo): void {
    this.api.sendUser(userInfo).subscribe();
  }

  getRoom(id: number): Observable<RoomsForRent> {
    return this.api.getRoom(id);
  }

  sendRentRoom(room: RoomsForRent): void {
    this.api.sendRoom(room).subscribe();
  }

}
