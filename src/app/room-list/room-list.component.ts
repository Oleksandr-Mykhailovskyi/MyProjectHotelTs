import { Component, OnInit } from '@angular/core';
import { ApiService} from "../api/apiService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  // private showRoom: ShowRoomsForRentComponent = new ShowRoomsForRentComponent(this.apiService);

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {

    // this.guestInfo();

    // this.apiService.guestInfo().subscribe(
    //   n => this.options = n
    // );
    // this.infoToGuest = [
    //   {img: 'https://cdn.suwalls.com/wallpapers/photography/liviong-room-33501-2560x1600.jpg', text: 'best', id: 1, price: 350, howManyPeople: 3, breakfast: true},
    //   {img: 'https://wallbox.ru/wallpapers/main/201451/9a1dbef85615312.jpg', text: 'the best', id: 2, price: 450, howManyPeople: 2, breakfast: true},
    //   {img: 'https://тканиоптом.рф/sites/default/files/styles/watermark/public/gallery/odnotonii%20porteri%20v%20spalny.jpg?itok=1hv6ewa-', text: 'the best', id: 3, price: 750, howManyPeople: 3, breakfast: true},
    //   {img: 'https://s1.1zoom.ru/b5050/687/349712-admin_3840x2400.jpg', text: 'the best', id: 4, price: 700, howManyPeople: 3, breakfast: true},
    //   {img: 'https://masyamba.ru/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D1%8C%D0%B5%D1%80%D0%B0-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9/29-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%B3%D0%BE%D1%81%D1%82%D0%B8%D0%BD%D0%BE%D0%B9.jpg', text: 'the best', id: 5, price: 350, howManyPeople: 1, breakfast: false},
    // ]
  }

  test(id: number): void {
    this.router.navigate([`book-now/${id}`]);
  }

  // guestInfo(): void {
  //   this.apiService.guestInfo().subscribe(
  //     (rooms) => {
  //       if (!!rooms) {
  //         this.infoToGuest = rooms
  //       }
  //     }
  //   );
  // }

  // checkRoom(room: number): void {
  //   this.apiService.checkRoom(room).subscribe(
  //     (room) => console.log(room)
  //   );
  // }
}
