import {APP_BOOTSTRAP_LISTENER, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {RoomListComponent} from "./room-list/room-list.component";
import {ShowRoomsForRentComponent} from "./show-rooms-for-rent/show-rooms-for-rent.component";
import {TyForBookComponent} from "./ty-for-book/ty-for-book.component";

const routes: Routes = [
  {path: 'home', component:HomePageComponent},
  {path: 'book-list', component: RoomListComponent},
  {path: 'book-now/:id', component: ShowRoomsForRentComponent},
  {path: 'ty', component: TyForBookComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
