import { Component, OnInit } from '@angular/core';
import { QuanLyPhimService } from '../_core/Shared/Service/QuanLyPhim.service';

@Component({
    selector: 'app-home-page',
    template: `
       <div class="container">
           <h3>Danh sach phim</h3>
           <div class="row">
               <div class="col-4 mt-2" *ngFor= "let phim of mangPhim">
                   <div class="card">
                       <img [src]="phim.hinhAnh" alt="..." class="w-100">
                       <div class="card-body">
                           <p>{{phim.tenPhim}}</p>
                           <p>{{phim.moTa}}</p>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    `
})

export class HomePageComponent implements OnInit {

    mangPhim: any[]=[]

    constructor(private qlPhim:QuanLyPhimService) { }

    ngOnInit() {
        this.qlPhim.layDanhSachPhim().subscribe((result:any)=>{
            console.log('result',result.content);
            
            this,this.mangPhim= result.content;
        },(errors)=>{
            console.log(errors.eror);
            
        })
     }
}