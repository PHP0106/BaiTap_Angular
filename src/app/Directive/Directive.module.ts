import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AntDModule } from '../_core/Shared/Antd/Antd.module';
import { MaterialModule } from '../_core/Shared/Material/MaterialModule.module';
// import { BaiTapLoginComponent } from './BaiTapLogin.component';
// import { BaiTapQLSPComponent } from './BaiTapQLSP.component';
import { DirectiveComponent } from './Directive.component';



@NgModule({
    declarations: [DirectiveComponent],
    imports: [CommonModule, FormsModule,AntDModule,MaterialModule],
    exports: [DirectiveComponent],

})
export class DirectiveModule { }
