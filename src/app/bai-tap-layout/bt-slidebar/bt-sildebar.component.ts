import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-sildebar',
    template: `
    <div class="content text-center">
        app-slidebar
    </div>`,
    styles:[`
    .content{
        background: green;
        padding:10%;
        color: white;
    }
`]
})

export class BaiTapSlidebar implements OnInit {
    constructor() { }

    ngOnInit() { }
}