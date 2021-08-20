import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AntDModule } from 'src/app/_core/Shared/Antd/Antd.module';
import { DemoUIComponent } from './DemoUI.component';


@NgModule({
    declarations: [DemoUIComponent],
    imports: [CommonModule,AntDModule],
    exports: [DemoUIComponent],
    
})
export class DemoUIModule { }
