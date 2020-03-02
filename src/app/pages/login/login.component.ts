import { Component, HostBinding, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { loginTransition } from './login.animation';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { generateUUID } from 'src/utils/uuid';
import { UserService } from './servicers/user.servicer';
import { UserDto } from './models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [loginTransition]
})

export class LoginComponent implements OnInit {
  @HostBinding('@loginTransition') state = 'activated';

  username: string;
  password: string;
  user: UserDto;

  loginForm: FormGroup;

  constructor(
    private store: LocalStorageService,
    private router: Router,
    private fb: FormBuilder,
    private userService: UserService
  ) {
    this.user = {} as UserDto;
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }

  submitForm(e): void {
    // const token = generateUUID();
    // this.store.setToken(token);
    this.user.userName = this.loginForm.controls['userName'].value;
    this.user.password = this.loginForm.controls['userName'].value;
    this.userService.login(this.user).subscribe(result => {
      console.log(result);
    });
    // this.router.navigateByUrl('main');
  }
}
