import { TestBed } from '@angular/core/testing';

import { EditlableService } from './editlable.service';

describe('EditlableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditlableService = TestBed.get(EditlableService);
    expect(service).toBeTruthy();
  });
});
