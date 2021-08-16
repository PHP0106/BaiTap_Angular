import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from './ProductList/ProductList.component';

@Component({
    selector: 'app-demo-props',
    template: `
    <div class="container">
        <h1 style="font-weight:bold">@input</h1>
        <app-product-list #tagProductList></app-product-list>


        <p id="theP" #tagP>Ahihi</p>
        <button (click)="ViewDom()">DOM</button>
        <div>
            <h3>Thong tin san pham</h3>
            <div class="form-group">
                <p>Id</p>
                <input class="form-control" #id>
            </div>
            <div class="form-group">
                <p>Name</p>
                <input class="form-control" #name>
            </div>
            <div class="form-group">
                <p>Price</p>
                <input class="form-control" #price>
            </div>
            <div class="form-group">
                <button class="btn btn-success" (click) ="addProduct(id.value,name.value,price.value)">Add Product</button>
            </div>
        </div>
    </div>
    `
})

export class DemoPropsComponent implements OnInit {
    constructor() { }

   @ViewChild('tagP') tagP!:ElementRef;
   @ViewChild('tagProductList') tagProductList !: ProductListComponent;

    ngOnInit() { }

    ViewDom(){
        // let theP = document.getElementById('theP');
        this.tagP.nativeElement.innerHTML = 'ABC';
    }

    addProduct(id:string, name:string, price:string){
        let product : Product = {id:Number(id),name,price:Number(price),img:`https://picsum.photos/id/${id}/200/200`};
        this.tagProductList.products.push(product);
    }
}

interface Product {
    id:number,
    name:string,
    price:number,
    img:string
}
