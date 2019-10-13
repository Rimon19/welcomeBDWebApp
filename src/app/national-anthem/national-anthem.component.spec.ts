import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalAnthemComponent } from './national-anthem.component';

describe('NationalAnthemComponent', () => {
  let component: NationalAnthemComponent;
  let fixture: ComponentFixture<NationalAnthemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalAnthemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalAnthemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
