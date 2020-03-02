import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { LeftControlComponent } from './left-control/left-control.component';
import { ListComponent } from './left-control/list/list.component';
import { RightControlComponent } from './right-control/right-control.component';
import { HeaderComponent } from './right-control/header/header.component';
import { DetailComponent } from './detail/detail.component';
import { SortablejsModule } from 'ngx-sortablejs';
import { DataEntryModule } from 'src/app/shared/data-entry-components/data-entry.module';
import { AceEditorModule } from 'ng2-ace-editor';

@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule,
    MainRoutingModule,
    FormsModule,
    SortablejsModule,
    DataEntryModule,
    AceEditorModule,
  ],
  declarations: [
    MainComponent,
    LeftControlComponent,
    ListComponent,
    RightControlComponent,
    HeaderComponent,
    DetailComponent
  ]
})
export class MainModule { }
