import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanModalComponent } from './fan-modal.component';

describe('FanModalComponent', () => {
  let component: FanModalComponent;
  let fixture: ComponentFixture<FanModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
