import { Pipe, PipeTransform } from '@angular/core';
import { image } from 'ngx-bootstrap-icons';

@Pipe({
  name: 'default'
})
export class ImagePipe implements PipeTransform {

  transform(value: string, fallback: string): string {
    let image = "";
    if (value) {
      image = value;
    } else{
      image = fallback;
    }
    return image;
  }
}
