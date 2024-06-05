import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxBootstrapIconsModule, allIcons } from 'ngx-bootstrap-icons';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IProduct } from './product';
import { StarComponent } from './product/product-list/star/star.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localEsCL from '@angular/common/locales/es-CL';
import { ImagePipe } from './product/shared/image.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ModalAddComponent } from './modal-add/modal-add.component';

registerLocaleData(localEsCL, 'es-CL')
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ImagePipe,
    ModalAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxBootstrapIconsModule.pick(allIcons),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [{provide: LOCALE_ID, useValue : 'es-CL'}],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
