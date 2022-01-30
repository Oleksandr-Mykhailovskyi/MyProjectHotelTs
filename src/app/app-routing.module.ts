import {APP_BOOTSTRAP_LISTENER, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {ShowRoomsForRentComponent} from "./show-rooms-for-rent/show-rooms-for-rent.component";
import {InfoAboutRentRoomComponent} from "./api/info-about-rent-room/info-about-rent-room.component";
import {InfoAboutEndRentComponent} from "./info-about-end-rent/info-about-end-rent.component";

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'book-list', component: RoomListComponent},
  {path: 'book-now/:id', component: ShowRoomsForRentComponent},
  {path: 'info', component: InfoAboutRentRoomComponent},
  {path: 'sendEmail', component: InfoAboutEndRentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
