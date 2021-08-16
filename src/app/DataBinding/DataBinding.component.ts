import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-databinding',
    template: `
    <div class="container">
        <h1>1)Oneway binding</h1>

        <h3>+Interpolation</h3>
       <p>Tieu de: {{title}}</p>
       <input value={{title}} />

       <h3>Properties binding</h3>
       <div [innerHTML]="title"></div>
       <input value="title" />

       <h3>+ Event binding</h3>
       <input #inputTitle id="idTitle" /> <br >
       <br>
       <button class="btn btn-outline-success" (click)="changeTitle(inputTitle.value)">Change title</button>

       <hr />

       <h1>2/ Two way binding</h1>

       <input [(ngModel)]= "title">

       <hr>

       <table class="table">
           <thead>
               <tr>
                   <th>id</th>
                   <th>name</th>
                   <th>price</th>
                   <th>quantity</th>
                   <th>total</th>
                   <th></th>

               </tr>

           </thead>
           <tbody>
               <tr *ngFor="let product of arrProduct">
                  <td>{{product.id}}</td>
                  <td>{{product.name}}</td>
                  <td>{{product.price}}</td>
                  <td><input class="form-control" [(ngModel)]="product.quantity" /></td>
                  <th>{{product.price*product.quantity}}</th>
               </tr>
           </tbody>
       </table>



        <hr>
        <h3>Bai tap databinding</h3>
        <app-bai-tap-databinding></app-bai-tap-databinding>

    </div>
    `
})

export class DataBindingComponent implements OnInit {
    // Tat ca cac du lieu hien thi tren giao dien dieu phai quan ly boi thuoc tinh cua model

    title: string = 'hello cybersoft';

    arrProduct:Product[]=[
        {id:'1', name:'iPhone',price:1000,quantity:10},
        {id:'2', name:'iPhone X',price:2000,quantity:20},
        {id:'3', name:'iPhone XS',price:3000,quantity:30},
    ]

    changeTitle =(newTitle:string)=>{
        this.title =newTitle;
    }


    constructor() { }

    ngOnInit() { }
}

interface Product {
    id:string,
    name:string,
    price:number,
    quantity: number

}