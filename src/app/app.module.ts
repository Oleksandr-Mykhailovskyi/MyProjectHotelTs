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
import {CalendarModule} from 'primeng/calendar';
import {InputSwitchModule} from 'primeng/inputswitch';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {CheckboxModule} from 'primeng/checkbox';
import {InfoAboutRentRoomComponent} from "./api/info-about-rent-room/info-about-rent-room.component";
import { InfoAboutEndRentComponent } from './info-about-end-rent/info-about-end-rent.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomePageComponent,
    RoomComponent,
    RoomListComponent,
    ShowRoomsForRentComponent,
    InfoAboutRentRoomComponent,
    InfoAboutEndRentComponent

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
    ReactiveFormsModule,
    CalendarModule,
    InputSwitchModule,
    AutoCompleteModule,
    CheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
