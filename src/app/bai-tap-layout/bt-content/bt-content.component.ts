import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-bt-contnet',
    template: `
    <div class="content text-center">
        app-content
    </div>
    `,
    styles:[`
        .content{
            background: yellow;
            padding:10%;
            color: white;
        }
    `]
})

export class BaiTapConntent implements OnInit {
    constructor() { }

    ngOnInit() { }
}