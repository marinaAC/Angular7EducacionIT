import {Injectable} from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Product } from '../models/product';

@Injectable({
    providedIn:'root'
})
export class Productservice {
    productList: AngularFireList<any>;
    selectedProduct: Product = new Product();
    constructor(private firebase:AngularFireDatabase){}

    getProduct(){
        return this.productList = this.firebase.list("/products");
    }

    insertProduct(product: Product){
        this.productList.push({/*objeto Producto*/
            name: product.name,
            category: product.category,
            location: product.location,
            price: product.price
            
        })
    }

    updateProduct(product: Product){
        this.productList.update(product.$key,{/* objeto a actualizar*/
            name: product.name,
            category: product.category,
            location: product.location,
            price: product.price
        })
    }

    deleteProducto($key:string){
        this.productList.remove($key);
    }
}
