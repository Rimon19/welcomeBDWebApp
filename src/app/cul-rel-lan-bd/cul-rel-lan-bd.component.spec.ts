import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CulRelLanBDComponent } from './cul-rel-lan-bd.component';

describe('CulRelLanBDComponent', () => {
  let component: CulRelLanBDComponent;
  let fixture: ComponentFixture<CulRelLanBDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CulRelLanBDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CulRelLanBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
