import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelnewsFeedComponent } from './travelnews-feed.component';

describe('TravelnewsFeedComponent', () => {
  let component: TravelnewsFeedComponent;
  let fixture: ComponentFixture<TravelnewsFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelnewsFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelnewsFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
