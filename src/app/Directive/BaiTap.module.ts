import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapComponent } from './BaiTap.component';
import { BaiTapLoginComponent } from './BaiTapLogin.component';
import { BaiTapQLSPComponent } from './BaiTapQLSP.component';


@NgModule({
    declarations: [BaiTapComponent,BaiTapLoginComponent,BaiTapQLSPComponent],
    imports: [CommonModule,FormsModule],
    exports: [BaiTapComponent],
    
})
export class BaiTapModule { }
