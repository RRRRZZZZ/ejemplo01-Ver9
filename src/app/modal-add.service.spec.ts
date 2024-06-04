import { TestBed } from '@angular/core/testing';

import { ModalAddService } from './modal-add.service';

describe('ModalAddService', () => {
  let service: ModalAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModalAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
