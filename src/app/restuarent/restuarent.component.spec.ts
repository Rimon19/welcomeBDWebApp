import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestuarentComponent } from './restuarent.component';

describe('RestuarentComponent', () => {
  let component: RestuarentComponent;
  let fixture: ComponentFixture<RestuarentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestuarentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestuarentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
