import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortcutkeysComponent } from './shortcutkeys.component';

describe('ShortcutkeysComponent', () => {
  let component: ShortcutkeysComponent;
  let fixture: ComponentFixture<ShortcutkeysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortcutkeysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortcutkeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
