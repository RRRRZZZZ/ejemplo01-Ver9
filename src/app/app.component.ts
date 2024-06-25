import { Component } from '@angular/core';
import { allIcons, image, list } from 'ngx-bootstrap-icons';
import { IProduct } from './product';
import { ProductService } from './product/product.service';
import { ModalAddComponent } from './modal-add/modal-add.component';
import { ModalAddService } from './modal-add.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Empresa ACME';
  _listFilter!: string;

  constructor(
    private router: Router,
    public productService: ProductService,
    public modalService: ModalAddService
  ) {}

  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.productService.filteredProducts = this.listFilter
      ? this.performFilter(this.listFilter)
      : this.productService.products;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.productService.products.filter(
      (product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      (res: any[]) => {
        this.productService.products = res;
        this.productService.filteredProducts = res;
        console.log(this.productService.products);
      },
      (err) => console.log(err)
    );
  }

  crearProducto() {
    let datos: any = {
      name: 'Producto' + Math.round(Math.random() * (100 - 1) + 1),
      code: this.productService.generarCodigo(),
      date: '2019-03-07',
      price: Math.round(Math.random() * (130 - 20) + 20),
      description: 'Producto de prueba',
      rating: Math.round(Math.random() * (200 - 1) + 1),
      image: '',
    };
    this.guardarProducto(datos);
  }

  guardarProducto(producto: IProduct) {
    this.productService.saveProduct(producto).subscribe(() => {
      return this.productService.getProducts().subscribe(
        (res: any[]) => {
          this.productService.products = res;
          this.productService.filteredProducts = res;
        },
        (err) => console.log(err)
      );
    });
  }
  abrirModal() {
    this.modalService.mostrarModal();
  }

  navegar() {
    this.router.navigate(['product/product-list']);
  }
}
