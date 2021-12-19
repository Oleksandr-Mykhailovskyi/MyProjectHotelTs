import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyForBookComponent } from './ty-for-book.component';

describe('TyForBookComponent', () => {
  let component: TyForBookComponent;
  let fixture: ComponentFixture<TyForBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyForBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyForBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
