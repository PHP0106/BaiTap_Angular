import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-footer',
    template: `
    <div class="content text-center">
        app-slidebar
    </div>`,
    styles:[`
    .content{
        background: blue;
        padding:5%;
        color: white;
    }
`]
})

export class BaiTapFooter implements OnInit {
    constructor() { }

    ngOnInit() { }
}