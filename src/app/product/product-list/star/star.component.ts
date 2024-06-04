import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent implements OnChanges{
  @Input() rating: number = 100;
  stars!:number ;
  star2!: number;
  arr: any;
  arr2!: any;

ngOnChanges(): void {
  if (this.rating>0 && this.rating<=40) {
    this.stars = 1;
    this.star2 = 4;
  }else if (this.rating>40 && this.rating<=80) {
    this.stars = 2;
    this.star2 = 3;
  }else if (this.rating>80 && this.rating<=120) {
    this.stars = 3;
    this.star2 = 2;
  }else if (this.rating>120 && this.rating<=160) {
    this.stars = 4;
    this.star2 = 1;
  }else if (this.rating>160 && this.rating<=200) {
    this.stars = 5;
    this.star2 = 0;
  }
  this.arr = new Array(this.stars).fill(1);
  this.arr2 = new Array(this.star2).fill(1);
}
}
