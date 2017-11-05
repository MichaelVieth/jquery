import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobuttonComponent } from './twobutton.component';

describe('TwobuttonComponent', () => {
  let component: TwobuttonComponent;
  let fixture: ComponentFixture<TwobuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwobuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwobuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
