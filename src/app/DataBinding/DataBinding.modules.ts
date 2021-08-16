import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapDaTaBinding } from './BaiTapDatabinding.component';
import { DataBindingComponent } from './DataBinding.component';

// import { NameComponent } from './name.component';

@NgModule({
    declarations: [DataBindingComponent,BaiTapDaTaBinding],
    imports: [FormsModule, CommonModule],
    exports: [DataBindingComponent],
    
    providers: [],
})
export class DataBindingModule { }
