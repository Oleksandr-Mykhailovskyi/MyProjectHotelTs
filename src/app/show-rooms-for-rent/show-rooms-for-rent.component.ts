import { Component, OnInit } from '@angular/core';
import {RoomsForRent} from "../api/rooms-for-rent";
import {ApiService} from "../api/apiService";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserInfo} from "../api/user-info";
import {RoomService} from "../service/room.service";

@Component({
  selector: 'app-show-rooms-for-rent',
  templateUrl: './show-rooms-for-rent.component.html',
  styleUrls: ['./show-rooms-for-rent.component.css']
})
export class ShowRoomsForRentComponent implements OnInit {

  // @ts-ignore
  newUser: UserInfo;

  formGroup: FormGroup = this.initForm();

  // @ts-ignore
  showRoom: RoomsForRent;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private roomService: RoomService) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        const roomId = params.get('id') as any as number;
        this.setUpRoom(roomId);
      }
    );
  }

  setUpRoom(room: number): void {
    this.apiService.getRoom(room).subscribe(
      (room) => {
        if(!!room) {
          this.showRoom = room
          console.log(this.showRoom);
        }
      }
    );
  }

  private initForm(): FormGroup {
    return this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        surname: ['', [Validators.required, Validators.minLength(2)]],
        text: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.minLength(10)]],
        e_mail: ['', [Validators.required, Validators.minLength(6)]],
      }
    )
  }
  collect(): void {
    this.newUser = {
      id: 0,
      name: this.formGroup.get('name')?.value,
      surname: this.formGroup.get('surname')?.value,
      text: this.formGroup.get('text')?.value,
      phone: this.formGroup.get('phone')?.value,
      e_mail: this.formGroup.get('e_mail')?.value
    };
    console.log(this.newUser);
    this.roomService.sendUserInfo(this.newUser);
    this.roomService.sendRentRoom(this.showRoom);
  }
}
