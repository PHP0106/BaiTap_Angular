import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-header',
    template: `
        <div class="header text-center">
            app-header
        </div>
    `,
    styles:[`
        .header{
            background-color :red;
            padding: 5%;
            color:white;

        }
    `]
})

export class BaiTapHeader implements OnInit {
    constructor() { }

    ngOnInit() { }
}