import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() toggle :any;
  search :any= new FormControl('');
  @Output() expandClass:EventEmitter<any>=new EventEmitter();
  constructor() { }
  expand(){
    this.expandClass.emit(!this.toggle);
  }
  searchValue(){
    console.log(this.search.value)
  }
  ngOnInit(): void {
  }
}
