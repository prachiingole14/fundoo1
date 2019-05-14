import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendfeedbackComponent } from './sendfeedback.component';

describe('SendfeedbackComponent', () => {
  let component: SendfeedbackComponent;
  let fixture: ComponentFixture<SendfeedbackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendfeedbackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendfeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
