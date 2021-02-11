import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() toggle :any;
  @Output() expandClass:EventEmitter<any>=new EventEmitter();
  constructor() { }
  expand(){
    this.expandClass.emit(!this.toggle);
  }
  ngOnInit(): void {
  }

}
