import { Component, OnInit } from '@angular/core';
import {RoomsForRent} from "../api/rooms-for-rent";
import {ApiService} from "../api/apiService";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserInfo} from "../api/user-info";
import {AuthenticationService} from "../service/authentication.service";
import {CurrentUserStataService} from "../api/current-user-stata.service";

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

  checked: boolean = false;

  userSex: number = 1;

  constructor(private apiService: ApiService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder,
              private roomService: AuthenticationService,
              private current: CurrentUserStataService) {}

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
        name: ['', [Validators.required, Validators.minLength(2), Validators.nullValidator]],
        surname: ['', [Validators.required, Validators.minLength(2), Validators.nullValidator]],
        text: ['', [Validators.required]],
        phone: ['', [Validators.required, Validators.minLength(10), Validators.nullValidator]],
        e_mail: ['', [Validators.required, Validators.email, Validators.nullValidator]],
        dateOn: ['', [Validators.required]],
        dateOff: ['', [Validators.required]]
      }
    )
  }
  collect(): void {

    this.showRoom = {
      id: 1,
      roomId: 1,
      price: this.showRoom.price,
      text: this.formGroup.get('text')?.value,
      breakfast: this.showRoom.breakfast,
      howManyPeople: this.showRoom.howManyPeople,
      dateOn: this.formGroup.get('dateOn')?.value,
      dateOff: this.formGroup.get('dateOff')?.value,
    };

    this.newUser = {
      id: 2,
      userId: 2,
      name: this.formGroup.get('name')?.value,
      surname: this.formGroup.get('surname')?.value,
      text: this.formGroup.get('text')?.value,
      phone: this.formGroup.get('phone')?.value,
      e_mail: this.formGroup.get('e_mail')?.value,
      dateOn: this.formGroup.get('dateOn')?.value,
      dateOff: this.formGroup.get('dateOff')?.value,
      sex: this.userSex
    };

    this.current.setId(this.newUser.userId, this.showRoom.roomId);

    console.log(this.current.getCommand());

    this.roomService.sendRentRoom(this.showRoom);

    this.roomService.sendUserInfo(this.newUser);

    this.roomService.sendEmail(this.current.getCommand());
    // this.showRoom.price = this.showRoom.price + 50;

    // To set two dates to two variables
    // @ts-ignore
    varz
    var date1 = new Date(this.formGroup.get('dateOn')?.value);
    // @ts-ignore
    var date2 = new Date(this.formGroup.get('dateOff')?.value);
    //To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
    //To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    Difference_In_Days = Difference_In_Days * this.showRoom.price;
    this.showRoom.price = Difference_In_Days;
    console.log(this.showRoom.price);
  }

  male(): void {
    this.userSex = 1;
  }

  female(): void {
    this.userSex = 2;
  }
}
