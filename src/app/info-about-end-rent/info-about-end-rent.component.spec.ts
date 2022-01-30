import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAboutEndRentComponent } from './info-about-end-rent.component';

describe('InfoAboutEndRentComponent', () => {
  let component: InfoAboutEndRentComponent;
  let fixture: ComponentFixture<InfoAboutEndRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAboutEndRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAboutEndRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
