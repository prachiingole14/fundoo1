import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertnotesComponent } from './insertnotes.component';

describe('InsertnotesComponent', () => {
  let component: InsertnotesComponent;
  let fixture: ComponentFixture<InsertnotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertnotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertnotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
