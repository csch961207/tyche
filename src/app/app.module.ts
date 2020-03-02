// tslint:disable-next-line:jsdoc-format
/** 配置 angular i18n **/
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { SortablejsModule } from 'ngx-sortablejs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import { MainModule } from './pages/main/main.module';
import { SettingModule } from './pages/setting/setting.module';
import { InitGuardService } from './services/init-guard/init-guard.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // tslint:disable-next-line:jsdoc-format
    /** 导入 ng-zorro-antd 模块 **/
    SortablejsModule.forRoot({ animation: 150 }),
    NgZorroAntdModule,
    LoginModule,
    SettingModule,
    MainModule,
  ],
  bootstrap: [ AppComponent ],
  // tslint:disable-next-line:jsdoc-format
  /** 配置 ng-zorro-antd 国际化（文案 及 日期） **/
  providers   : [
    { provide: NZ_I18N, useValue: zh_CN },
    InitGuardService
  ]
})
export class AppModule { }
