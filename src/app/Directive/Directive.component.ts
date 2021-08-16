import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-directive',
    template: `
    <div class="container">
        <h3 class="text-center">Demo directive</h3>
        <h3>+ngIf ( Dung de xac dinh render hoac khong render ra giao dien)</h3>
        <p *ngIf="status">Title: cybersoft</p>
        
        <button class="btn btn-success" (click)="anHien()">An/Hien</button>
        <div class="form-group mt-2 mb-2">
            <input #num class="form-control"/>
            <button class="btn btn-outline-success" (click)="changeNumber(num.value)">OK</button>
        </div>
       <h3>So: {{number}}</h3>
       <div *ngIf ="number%2===0">So chan</div>
       <div *ngIf ="number%2!==0">So le</div>

       <h3>Vi du</h3>
       <nav class="navbar navbar-expand-sm navbar-dark bg-primary">
           <a class="navbar-brand" href="#">Navbar</a>
           <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
               aria-expanded="false" aria-label="Toggle navigation"></button>
           <div class="collapse navbar-collapse" id="collapsibleNavId">
               <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                   <li class="nav-item active">
                       <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link" href="#">Link</a>
                   </li>
                   <li class="nav-item dropdown">
                       <a class="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                       <div class="dropdown-menu" aria-labelledby="dropdownId">
                           <a class="dropdown-item" href="#">Action 1</a>
                           <a class="dropdown-item" href="#">Action 2</a>
                       </div>
                   </li>
               </ul>
               <form class="form-inline my-2 my-lg-0">
                    <div class="nav-item" *ngIf ="isLogin;else divLogin">
                       <a class="nav-link text-white" href="#">Hello !{{userName}}</a>
                       <a class="nav-link text-white" href="#" (click)="logout()">Dang xuat</a>
                    </div>
                    <ng-template #divLogin >
                        <div class="nav-item">
                            <a class="nav-link text-white" href="#" (click) ="login()">
                                Dang nhap
                            </a>
                        </div>
                    </ng-template>
               </form>
           </div>
       </nav>

       <hr>
       <h3>*ng Switch Case</h3>

       <div [ngSwitch]="color">
           <div *ngSwitchCase="'red'" style="color:red">Red</div>
           <div *ngSwitchCase="'green'" style="color:green">Green</div>
           <div *ngSwitchCase="'blue'" style="color:blue">Blue</div>
           <div *ngSwitchDefault style="color:orange;">Orange</div>
       </div>

       <select class="form-control" [(ngModel)]="color">
           <option value="red">red</option>
           <option value="green">green</option>
           <option value="blue">blue</option>
           <option value="orange">organe</option>
       </select>

       <hr>
       <h3>*ngFor: Dung de render cac phan tu giong nhau tren giao dien</h3>
        <div class="row">
            <div class="col-4" *ngFor="let prod of arrProduct; let i= index">
                <div class="card">
                    <img [src]="prod.image" class="w-100">
                    <div class="card-body">
                        <p>{{prod.name}}</p>
                        <p>{{prod.price.toLocaleString()}}</p>
                        <button class="btn btn-outline-success">Dat hang</button>
                    </div>
                </div>
            </div>

        </div>
        <table class="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>image</th>
                    <th>name</th>
                    <th>price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            <tr class="text-white" *ngFor="let product of arrProduct" [ngClass]="{'bg-dark ':product.id%2===0, 'bg-success ': product.id%2!==0}">
                  <td>{{product.id}}</td>
                  <td> <img [src]="product.image" width="50" height="50"></td>
                  <td>{{product.name}}</td>
                  <td>{{product.price}}</td>
               </tr>
            </tbody>
        </table>
        <hr>
        <h3>Style</h3>
        <p [ngStyle]="{'font-size':fontSize +'px'}">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque repellat enim tenetur adipisci molestias numquam accusamus esse eveniet quidem, incidunt excepturi ab optio a, amet perferendis ratione, est sapiente deleniti?</p>
        <button class="btn btn-outline-danger mr-2" (click)="tangFont()">+</button>
        <button class="btn btn-outline-danger mr-2" (click)="giamFont()">-</button>

        <hr>
        
        <hr>
        <div style="margin-bottom:500px;height:500px">
                <h3>Directive antd</h3>
                <button nz-button nzType="primary"  >
                    <i nz-icon nzType="poweroff"></i>
                    Click me!
                </button>
        </div>

        <div style="margin-bottom:500px;height:500px">
                <h3>Directive material</h3>
                <button mat-button color="accent">Accent</button>
                <button mat-mini-fab color="warn" aria-label="Example icon button with a filter list icon">
          <mat-icon>filter_list</mat-icon>
        </button>
        </div>

    </div>

    
    `
})

export class DirectiveComponent implements OnInit {

    arrProduct: any[] = [
        { id: 1, name: 'Phone 1', price: 1000, image: 'https://picsum.photos/id/1/200/200' },
        { id: 2, name: 'Phone 2', price: 1000, image: 'https://picsum.photos/id/2/200/200' },
        { id: 3, name: 'Phone 3', price: 1000, image: 'https://picsum.photos/id/3/200/200' },
    ]

    fontSize: number = 15;

    tangFont = () => {
        this.fontSize += 2;
    }

    giamFont = () => {
        this.fontSize -= 2;
    }

    color: string = 'red';


    userName: string = 'cybersoft';
    isLogin: boolean = true;
    status: boolean = true;
    number: number = 2;

    anHien = () => {
        this.status = !this.status;
    }

    login = () => {
        this.isLogin = true;
    }

    logout = () => {
        this.isLogin = false;
    }

    changeNumber = (num: string) => {
        this.number = Number(num);
    }
    constructor() { }

    ngOnInit() { }
}