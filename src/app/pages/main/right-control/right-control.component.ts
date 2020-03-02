import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { generateUUID } from 'src/utils/uuid';

@Component({
  selector: 'app-right-control',
  templateUrl: './right-control.component.html',
  styleUrls: ['./right-control.component.scss']
})
export class RightControlComponent implements OnInit {

  visible = false;
  placement = 'bottom';
  items = [1, 2, 3, 4, 5];
  text: string = '';
  options: any = { maxLines: 1000, printMargin: false };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  add(title: string) {
  }
  onChange(code) {
    console.log('new code', code);
  }

  click(): void {
    const uuid = generateUUID();
    this.router.navigateByUrl(`/main/${uuid}`);
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
