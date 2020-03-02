import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  HostBinding
} from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { NzMessageService } from 'ng-zorro-antd';
import { detailTransition } from './detail.animation';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: [ './detail.component.scss' ],
  animations: [ detailTransition ]
})
export class DetailComponent implements OnInit {
  @HostBinding('@detailTransition') state = 'activated';
  @Output() changedTodo = new EventEmitter();

  inputValue: string;
  selectedValue: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService
  ) { }

  ngOnInit() {
    // this.route.paramMap.pipe(first()).subscribe((paramsMap: ParamMap) => {
    //   const id = paramsMap.get('id');
    // });
  }

  goBack(): void {
    this.router.navigateByUrl('main');
  }

  confirm(): void {
    this.goBack();
  }

  delete(): void {
    this.goBack();
  }
}
