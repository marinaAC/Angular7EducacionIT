import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Productservice } from 'src/app/service/productservice';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private productService:Productservice, private toastr: ToastrService) { }

  ngOnInit() {
    this.productService.getProduct();
    this.resetForm();
  }

  onSubmit(productForm:NgForm){
    if(productForm.value.$key==null){
      this.productService.insertProduct(productForm.value);
    } else{
      this.productService.updateProduct(productForm.value);
    }
    this.resetForm();
    this.toastr.success("Bien se subio a la bd","Producto registrado");
  }

  resetForm(productForm?:NgForm){
    if(productForm!=null){
      productForm.reset();
      this.productService.selectedProduct = new Product();
    }
  }
}
