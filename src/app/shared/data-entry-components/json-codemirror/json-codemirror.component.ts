import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript.js';
import 'codemirror/addon/hint/show-hint.js';
import 'codemirror/addon/hint/javascript-hint.js';
// import 'codemirror/addon/hint/sql-hint.js';
import 'codemirror/addon/fold/foldcode.js';
import 'codemirror/addon/fold/foldgutter.js';
import 'codemirror/addon/fold/brace-fold.js';
import 'codemirror/addon/fold/comment-fold.js';
import 'codemirror/addon/edit/matchbrackets.js';
import 'codemirror/addon/hint/anyword-hint.js';

@Component({
    selector: 'app-json-codemirror',
    template: `
    <codemirror [(ngModel)]="sqlData" [config]="cmOptions" id='editor'></codemirror>
  `
})

export class JsonCodemirrorComponent implements OnInit {

    @ViewChild('htmlInputElement', { static: true }) htmlInputElement: ElementRef<HTMLInputElement>;

    // 2. 定义CodeMirror组件所需要的变量

    sqlData: any = ''; // 双向绑定，获取输入的sql语句

    cmOptions: any = { // codemirror组件的配置项
        lineNumbers: true, // 显示行号
        styleActiveLine: true, // 当前行背景高亮
        lineWrapping: true,
        mode: {
            name: 'application/json'
        }, // 定义mode
        indentUnit: 4,  // 缩进单位，默认2
        smartIndent: true,  // 是否智能缩进
        //设置主题
        theme: "eclipse",
        //绑定Vim
        // keyMap: "vim",

        foldGutter: true,
        gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter", "CodeMirror-lint-markers"],
        //CodeMirror-lint-markers是实现语法报错功能
        lint: true,

        //全屏模式
        // fullScreen: true,

        //括号匹配
        matchBrackets: true,

        //快捷键
        extraKeys: {
            // "Alt-Space": "autocomplete", //ctrl-space唤起智能提示
            // "F11": function (cm) {
            //     cm.setOption("fullScreen", !cm.getOption("fullScreen"));
            // },
            // "Esc": function (cm) {
            //     if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
            // },
            // "Ctrl-/": "toggleComment",
            // "Ctrl-S": function () {
            //     $('#save').click();
            // },
            // "Ctrl-Z": function (editor) {
            //     editor.undo();
            // },//undo
            // "F8": function (editor) {
            //     editor.redo();
            // },//Redo
            // "F7": function autoFormat(cm) {
            //     var totalLines = cm.lineCount();
            //     cm.autoFormatRange({ line: 0, ch: 0 }, { line: totalLines });
            // }//代码格式化
        }
    };

    constructor(
    ) {
    }

    ngOnInit(): void {
    }
}
