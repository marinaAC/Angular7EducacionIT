import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Productservice } from 'src/app/service/productservice';
import { ToastrService } from 'ngx-toastr';
import { element } from '@angular/core/src/render3';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Product[];
  constructor(private productService:Productservice,private toastr:ToastrService) { }

  ngOnInit() {
    return this.productService.getProduct().snapshotChanges().subscribe(item =>{
      this.productList = [];
      item.forEach(element=>{
        let x = element.payload.toJSON();
        x["$key"] = element.key;
        this.productList.push(x as Product);
      })
    })
  }

  onEdit(product: Product){
    this.productService.selectedProduct = Object.assign({},product);
  }

  onDelete($key:string){
    if(confirm("Estas seguro de eliminar este producto ")){
        this.productService.deleteProducto($key);
        this.toastr.warning("Se borro correctamente", "el producto fue borrado correctamente");
    }
  }
}
