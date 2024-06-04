import { Component } from '@angular/core';
import { ModalAddService } from '../modal-add.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrl: './modal-add.component.css'
})
export class ModalAddComponent {
  constructor(public modalService : ModalAddService){}
  ocultarModal(){
    this.modalService.ocultarModal();
  }
}
