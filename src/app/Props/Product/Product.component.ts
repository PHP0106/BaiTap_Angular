import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-product',
    template: `
    <div class="card">
        <img class="w-full" [src]="product.img">
        <div class="card-body">
            <p>{{product.name}}</p>
            <p>{{product.price}}</p>

            <button data-toggle="modal" data-target="#modelId" class="btn btn-outline-danger" (click)="xemChiTiet()">Xem chi tiet</button>
        </div>
    </div>
    `
})

export class ProductComponent implements OnInit {

    @Input() product!:Product

    @Output() eventXemChiTiet = new EventEmitter();

    xemChiTiet(){
        this.eventXemChiTiet.emit(this.product)
    }


    constructor() { }

    ngOnInit() { }
}
interface Product {
    id:number,
    name:string,
    price:number,
    img:string
}
