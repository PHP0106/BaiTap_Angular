import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from '../Product/Product.component';

@Component({
    selector: 'app-product-list',
    template: `
    <h3>Danh sach san pham</h3>
    <div class="row">
        <div class="col-3" *ngFor ="let product of products">
            <app-product (eventXemChiTiet)="xemChiTiet($event)" [product]="product"></app-product>
        </div>
    </div>
    <br>
    <input #idSP class ="form-control" >
    <button class="btn btn-outline-success" data-toggle="modal" data-target="#modelId" (click)="viewDetail(idSP.value)" >View Detail</button>
    <br>
    <button class="mt-5" (click)="changePrice()">Change Price</button>
    
    <!-- Modal -->
    <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                    <div class="modal-header">
                            <h5 class="modal-title">{{productDetail.name}}</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                        </div>
                <div class="modal-body">
                    <div class="container-fluid">
                        <img [src]="productDetail.img" alt="">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
    
    
    
    `
})

export class ProductListComponent implements OnInit {

    productDetail:Product={
        id:1, name: 'Iphone',price:1000, img:'https://picsum.photos/200/200'
    }

    product: Product ={
        id:1, name: 'Iphone',price:1000, img:'https://picsum.photos/200/200'
    }

    products: Product[]=[
        {id:1, name: 'Iphone',price:1000, img:'https://picsum.photos/id/11/200/200'},
        {id:2, name: 'IphoneX',price:2000, img:'https://picsum.photos/id/22/200/200'},
        {id:3, name: 'IphoneXS',price:3000, img:'https://picsum.photos/id/33/200/200'}
    ]

    @ViewChildren(ProductComponent) dsTagAppProduct!: QueryList <ProductComponent>

    changePrice(){
        this.dsTagAppProduct.forEach((tagProduct:ProductComponent,index)=>{
            tagProduct.product.price *= 1.05;
        })
    }
    xemChiTiet(dataOutputProduct:any){
        this.productDetail=dataOutputProduct;
    }

    viewDetail(id:string){
        let tagClick: any = this.dsTagAppProduct.find(
            (tagAppProduct:ProductComponent)=>tagAppProduct.product.id==Number(id));
            if(tagClick){
                tagClick.eventXemChiTiet.emit(tagClick.product);
            }
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