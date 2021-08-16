import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BaiTapLayoutModule } from './bai-tap-layout/bai-tap-layout.modile';
import { DataBindingModule } from './DataBinding/DataBinding.modules';
// import { BaiTapLayoutComponent } from './bai-tap-layout/bai-tap-lay-out.component';
// import { BaiTapConntent } from './bai-tap-layout/bt-content/bt-content.component';
// import { BaiTapFooter } from './bai-tap-layout/bt-footer/bt-footer.component';
// import { BaiTapHeader } from './bai-tap-layout/bt-header/bt-header.component';
// import { BaiTapSlidebar } from './bai-tap-layout/bt-slidebar/bt-sildebar.component';
import { DemoComponent } from './demo/demo.component';
// import { DirectiveComponent } from './Directive/Directive.component';
import { DirectiveModule } from './Directive/Directive.module';
import {HeaderComponent} from './header/header.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropsModule } from './Props/Props.module';
import { BaiTapModule } from './Directive/BaiTap.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

registerLocaleData(en);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
   
    DemoComponent// Cac component trong module nay
  ],
  imports: [ // noi chen cac module khac vao
    BrowserModule,
    BaiTapLayoutModule,
    DataBindingModule,
    DirectiveModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    PropsModule,
    BaiTapModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }], // noi chen cac service
  bootstrap: [AppComponent, DemoComponent]
})
export class AppModule { }// module goc
