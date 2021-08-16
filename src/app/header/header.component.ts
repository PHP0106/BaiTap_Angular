import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-header',
    template: `
    <div>Hello header</div>
    `,
    styles:[`
        .app-header{
            background :'red';
        }
    
    `]
})

export class HeaderComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}