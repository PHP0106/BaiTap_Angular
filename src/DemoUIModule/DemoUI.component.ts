import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ui',
    template: `
        <div class="container">
            <h3>Demo drawer ant</h3>
            <button nz-button nzType="primary" (click)="open()">Open</button>
            <nz-drawer
            [nzClosable]="false"
            [nzVisible]="visible"
            nzPlacement="right"
            nzTitle="Basic Drawer"
            (nzOnClose)="close()"
            >
            <ng-container *nzDrawerContent>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </ng-container>
            </nz-drawer>
        </div>
    `
})

export class DemoUIComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

    visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}