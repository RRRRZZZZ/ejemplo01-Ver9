import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from '../../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{
  @Input('datos')public products:IProduct[]=[];
  imageWidth: number = 100;
  imageMargin:number = 50;
  showImage: boolean = false;

  constructor(public productService: ProductService){}

  ngOnInit(){}

  toggleImage(): void{
    this.showImage = !this.showImage;
  }

  deleteProduct(id: any){
    this.productService.deleteProduct(id).subscribe(()=>{
      return this.productService.getProducts().subscribe((res: any[]) => {
        this.productService.products = res;
        this.productService.filteredProducts = res;
      },
      err => console.log(err));
    })
  }

  updateProduct(id: any, product:any){
    let datos:any = {
      Productname: 'Producto' + Math.round(Math.random()*(100-1)+1),
      Productcode: this.productService.generarCodigo(),
      releasedate: '2019-03-07',
      price: Math.round(Math.random()*(130-20)+20),
      description: 'Producto de prueba2',
      starRating: Math.round(Math.random()*(200-1)+1),
      imageUrl: ''
    };
    this.productService.updateProduct(id, datos).subscribe(() =>{
      return this.productService.getProducts().subscribe((res: any[])=>{
        this.productService.products = res;
        this.productService.filteredProducts = res;
      },
      err => console.log(err));
    })

  }

  viewProduct(product: any){

  }


}
