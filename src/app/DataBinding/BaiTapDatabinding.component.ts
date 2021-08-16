import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-databinding',
    template: `
    <div style="margin-bottom: 500px">
        <div class="card w-50">

            <div class="card-header bg-dark text-white">
                Register form
            </div>
            <div class="card-body">
                <div class="form-group">
                    <p>Email</p>
                    <input class="form-control" [(ngModel)]="email" />
                </div>

                <div class="form-group">
                    <p>Fullname</p>
                    <input class="form-control" #inputFullName />
                </div>
                
                
                <button (click)="changeName(inputFullName.value)" class="btn btn-success">Submit</button>

                <h3>Email: {{email}} </h3>
                <h3>Fullname: {{fullName}} </h3>
            </div>

        </div>
    </div>
    
    
    `
})

export class BaiTapDaTaBinding implements OnInit {
    email: string = "[(ngModel)] to way"
    fullName = 'eventbinding'
    changeName =(newFullName :string)=>{
        this.fullName=newFullName;
    }
    constructor() { }

    ngOnInit() { }
}