import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenubarModule } from 'primeng/menubar';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
import { CardModule } from 'primeng/card';
import { HomePageComponent } from "./home-page/home-page.component";
import { RoomComponent } from './room/room.component';
import { DataViewModule } from 'primeng/dataview';
import { RoomListComponent } from './room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarModule, WavesModule, ButtonsModule } from 'angular-bootstrap-md';
import { ShowRoomsForRentComponent } from './show-rooms-for-rent/show-rooms-for-rent.component';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ReactiveFormsModule} from "@angular/forms";
import { TyForBookComponent } from './ty-for-book/ty-for-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    RoomComponent,
    RoomListComponent,
    ShowRoomsForRentComponent,
    TyForBookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    ImageModule,
    DataViewModule,
    HttpClientModule,
    NavbarModule,
    WavesModule,
    ButtonsModule,
    InputTextModule,
    InputTextareaModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
