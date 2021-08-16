import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bai-tap-layout',
    template: `
    <div>
        <app-bt-header></app-bt-header>
        <div class="row">
            <div class="col-6">
                <app-bt-contnet></app-bt-contnet>
            </div>
            <div class="col-6">
                <app-bt-sildebar></app-bt-sildebar>
            </div>
            
        </div>
        <app-bt-footer></app-bt-footer>

    </div>
    `
})

export class BaiTapLayoutComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}