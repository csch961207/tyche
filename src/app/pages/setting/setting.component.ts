import { Component, ElementRef, Host, HostBinding, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { pageSwitchTransition } from './setting.animation';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: [ './setting.component.scss' ],
  animations: [ pageSwitchTransition ]
})
export class SettingComponent implements OnInit {
  username = 'admin';

  @HostBinding('@pageSwitchTransition') state = 'activated';
  @ViewChild('usernameInput', {static: true}) private usernameInput: ElementRef;

  constructor(
    private store: LocalStorageService,
    private message: NzMessageService,
    private router: Router
  ) { }

  ngOnInit() {
    this.usernameInput.nativeElement.value = this.username;
  }

  validateUsername(username: string): void {
    if (!username) {
      this.message.error('用户名不能为空');
      this.usernameInput.nativeElement.value = this.username;
    } else if (username !== this.username) {
      this.username = username;
      this.message.success('用户名已修改');
    }
  }

  goBack(): void {
    this.router.navigateByUrl('/main');
  }
}
