import { Component } from '@angular/core';
import { EditorConfig } from './model/editor-config';

@Component({
    selector: 'app-editor-md',
    templateUrl: './editor-md.component.html',
    //   styleUrls: ['./aeditor-md.component.css']
})
export class EditorMdComponent {

    conf = new EditorConfig();
    // tslint:disable-next-line:max-line-length
    markdown = '# Editor.md';

    // 同步属性内容
    syncModel(str): void {
        this.markdown = str;
    }
}
