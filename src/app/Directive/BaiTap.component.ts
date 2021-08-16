import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-baitap',
    template: `
        <div class="container">
            <hr>
            <h3>Bai tap login</h3>
            <app-baitap-login></app-baitap-login>
            <hr>
            <h3>Bai tap quan ly san pham</h3>
            <app-baitap-qlsp></app-baitap-qlsp>
        </div>
        
        
    `
})

export class BaiTapComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}