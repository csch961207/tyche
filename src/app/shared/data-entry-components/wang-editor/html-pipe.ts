import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

/**
 * @description 解决 [innerHtml] 解析html标签字符串 不解析内联样式问题，用管道处理
 */
@Pipe({
    name: 'html'
})
export class HtmlPipe implements PipeTransform {
    constructor(private sanitizer: DomSanitizer) {
    }

    transform(style) {
        return this.sanitizer.bypassSecurityTrustHtml(style);
    }
}
