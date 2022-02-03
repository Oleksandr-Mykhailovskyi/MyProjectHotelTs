import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutRentRoomComponent } from './info-about-rent-room.component';

describe('InfoAboutRentRoomComponent', () => {
  let component: InfoAboutRentRoomComponent;
  let fixture: ComponentFixture<InfoAboutRentRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAboutRentRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAboutRentRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
