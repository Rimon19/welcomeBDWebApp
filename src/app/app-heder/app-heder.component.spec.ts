import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHederComponent } from './app-heder.component';

describe('AppHederComponent', () => {
  let component: AppHederComponent;
  let fixture: ComponentFixture<AppHederComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHederComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
