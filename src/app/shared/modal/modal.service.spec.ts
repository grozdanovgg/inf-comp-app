import { TestBed } from '@angular/core/testing';
import { ModalController } from '@ionic/angular';

import { ModalService } from './modal.service';

describe('ModalService', () => {
  let service: ModalService;
  let modalControllerSpy: jasmine.SpyObj<ModalController>;

  beforeEach(() => {
    modalControllerSpy = jasmine.createSpyObj('modalControllerSpy', ['create']);

    TestBed.configureTestingModule({
      providers: [
        { provide: ModalController, useValue: modalControllerSpy }
      ]
    });
    service = TestBed.inject(ModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
