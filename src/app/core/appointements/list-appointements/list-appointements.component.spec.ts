import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAppointementsComponent } from './list-appointements.component';

describe('ListAppointementsComponent', () => {
  let component: ListAppointementsComponent;
  let fixture: ComponentFixture<ListAppointementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAppointementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAppointementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
