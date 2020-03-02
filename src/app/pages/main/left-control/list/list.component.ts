import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  NzDropdownService,
  NzDropdownContextComponent,
  NzModalService
} from 'ng-zorro-antd';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: [ './list.component.css' ]
})
export class ListComponent implements OnInit, OnDestroy {
  @Input() isCollapsed: boolean;
  @ViewChild('listRenameInput', {static: true}) private listRenameInput: ElementRef;
  @ViewChild('listInput', {static: true}) private listInput: ElementRef;

  currentListUuid: string;
  contextListUuid: string;
  addListModalVisible = false;
  renameListModalVisible = false;

  private dropdown: NzDropdownContextComponent;
  private destroy$ = new Subject();

  constructor(
    private dropdownService: NzDropdownService,
    private modal: NzModalService
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.destroy$.next();
  }

  closeAddListModal(): void {
    this.addListModalVisible = false;
  }

  closeRenameListModal(): void {
    this.renameListModalVisible = false;
  }

  openAddListModal(): void {
    this.addListModalVisible = true;
    setTimeout(() => {
      this.listInput.nativeElement.focus();
    });
  }

  openRenameListModal(): void {
    this.renameListModalVisible = true;
    setTimeout(() => {
      this.listRenameInput.nativeElement.focus();
    });
  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>, uuid: string): void {
    this.dropdown = this.dropdownService.create($event, template);
    this.contextListUuid = uuid;
  }

  click(uuid: string): void {

  }

  rename(title: string): void {
    this.closeRenameListModal();
  }

  add(title: string): void {
    this.closeAddListModal();
  }

  delete(): void {
    const uuid = this.contextListUuid;
    this.modal.confirm({
      nzTitle: '确认删除列表',
      nzContent: '该操作会导致该列表下的所有待办事项被删除',
      nzOnOk: () =>
        new Promise((res, rej) => {
          res();
        }).catch(() => console.error('Delete list failed'))
    });
  }

  close(): void {
    this.dropdown.close();
  }
}
