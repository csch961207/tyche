import { CommonModule as NgCommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorMdComponent } from './editor-md/editor-md.component';
import { EditorMdDirective } from './editor-md/directive/editor-md.directive';
import { WangEditorDemoComponent } from './wang-editor/wang-editor.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { HtmlPipe } from './wang-editor/html-pipe';
import { CodemirrorModule } from 'ng2-codemirror';
import { JsonCodemirrorComponent } from './json-codemirror/json-codemirror.component';
import { EditorMdJsonComponent } from './editor-md/editor-md-json.component';


@NgModule({
    imports: [
        NgCommonModule,
        FormsModule,
        NgZorroAntdModule,
        CodemirrorModule
    ],
    declarations: [
        HtmlPipe,
        EditorMdDirective,
        EditorMdComponent,
        WangEditorDemoComponent,
        JsonCodemirrorComponent,
        EditorMdJsonComponent
    ],
    exports: [
        EditorMdComponent,
        WangEditorDemoComponent,
        JsonCodemirrorComponent,
        EditorMdJsonComponent
    ]
})

export class DataEntryModule {

}
