import { Component } from '@angular/core';
import { ModalAddService } from '../modal-add.service';
import { FormBuilder, Validators ,FormGroup, AsyncValidatorFn, AbstractControl } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { ProductService } from '../product/product.service';

@Component({
  selector: 'app-modal-add',
  templateUrl: './modal-add.component.html',
  styleUrl: './modal-add.component.css',
})
export class ModalAddComponent {
  formProduct!: FormGroup;
  constructor(
    public modalService: ModalAddService,
    private formBuilder: FormBuilder,
    public productService: ProductService
  ) {
this.formProduct = this.formBuilder.group({


  name: ['', [Validators.required]],
  code: ['', [Validators.required,  Validators.minLength(7)], this.codeValidator()],
  date: ['', [Validators.required]],
  price: ['', [Validators.required, Validators.min(1)]],
  description: ['', [Validators.required]],
  rating: ['', [Validators.required, Validators.min(1), Validators.max(200)] ],


})


    }
  codeValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Observable< {[key: string]: any} | null> =>{
      let code = control.value;
      console.log("cliente - code:" + code);
      return this.productService.searchProducts(control.value)
      .pipe(map(res=> {
        if (res && res.length) {
          console.log("codigo encontrado");
          return {'existe': true};   
        }
        console.log("codigo no existe");
        return null;
      })
    );
    };
  }

  ocultarModal() {
    this.modalService.ocultarModal();
  }

  saveData(){
    
    console.log(this.formProduct.value);
    
  }
}
