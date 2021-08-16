import { NgModule } from '@angular/core';
import { BaiTapLayoutComponent } from './bai-tap-lay-out.component';
import { BaiTapConntent } from './bt-content/bt-content.component';
import { BaiTapFooter } from './bt-footer/bt-footer.component';
import { BaiTapHeader } from './bt-header/bt-header.component';
import { BaiTapSlidebar } from './bt-slidebar/bt-sildebar.component';

// import { NameComponent } from './name.component';

@NgModule({
    declarations: [ BaiTapLayoutComponent,
        BaiTapHeader,
        BaiTapConntent,
        BaiTapSlidebar,
        BaiTapFooter,], //khai bao cac component thuoc module nay
    imports: [],// Gan cac module khac vao
    exports: [BaiTapLayoutComponent],// trich xuat raa component hoac nhung thanh phan khac cua angular cho nguoi khac import
    
})
export class BaiTapLayoutModule { }
