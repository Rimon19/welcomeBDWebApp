import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOfBDComponent } from './history-of-bd.component';

describe('HistoryOfBDComponent', () => {
  let component: HistoryOfBDComponent;
  let fixture: ComponentFixture<HistoryOfBDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryOfBDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryOfBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
