import { Component } from '@angular/core';
import { EditorConfig } from './model/editor-config';

@Component({
    selector: 'app-editor-md-json',
    templateUrl: './editor-md-json.component.html',
    styleUrls: ['./editor-md-json.component.scss']
})
export class EditorMdJsonComponent {

    confjson = new EditorConfig();
    // tslint:disable-next-line:max-line-length
    markdownjson = '';

    // 同步属性内容
    syncModel(str): void {
        debugger
        this.markdownjson = str;
    }
}
