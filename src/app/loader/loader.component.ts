import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loader',
  template: `<div class="lds-hourglass"></div>`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
