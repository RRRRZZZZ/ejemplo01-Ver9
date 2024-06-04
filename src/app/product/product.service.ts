import { Injectable } from '@angular/core';
import { IProduct } from '../product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  filteredProducts!: IProduct[];
  products!: IProduct[];

  constructor(private http: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>('http://localhost:3000/productos').pipe(map((res: any) => res.data));
  }

  rand_code(chars: string, lon:number): string{
    let code = "";
    for (let x = 0; x < lon ; x++) {
      let rand = Math.floor(Math.random()*chars.length);
      code += chars.substr(rand,1);
    }
    return code;
  }

  generarCodigo(): string{
    return this.rand_code('ABCDEFGHIJKLMÑNOPQRSTUWXYZ', 3)+ '-' + this.rand_code('0123456789', 4);
  }

  saveProduct(product:IProduct){
    return this.http.post<IProduct[]>('http://localhost:3000/producto', product);
  }

  deleteProduct(id: number){
    return this.http.delete('http://localhost:3000/producto/'+id);
  }

  updateProduct(id: number, product: any){
    return this.http.put('http://localhost:3000/producto/'+id, product);
  }
}
