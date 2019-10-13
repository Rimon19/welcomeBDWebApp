import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BDATAGlanceComponent } from './bdataglance.component';

describe('BDATAGlanceComponent', () => {
  let component: BDATAGlanceComponent;
  let fixture: ComponentFixture<BDATAGlanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BDATAGlanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BDATAGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
