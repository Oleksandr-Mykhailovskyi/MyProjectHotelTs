import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRoomsForRentComponent } from './show-rooms-for-rent.component';

describe('ShowRoomsForRentComponent', () => {
  let component: ShowRoomsForRentComponent;
  let fixture: ComponentFixture<ShowRoomsForRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowRoomsForRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRoomsForRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
