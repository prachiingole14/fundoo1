import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycontentsComponent } from './displaycontents.component';

describe('DisplaycontentsComponent', () => {
  let component: DisplaycontentsComponent;
  let fixture: ComponentFixture<DisplaycontentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycontentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycontentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
