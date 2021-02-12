import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidehovermenu',
  templateUrl: './sidehovermenu.component.html',
  styleUrls: ['./sidehovermenu.component.scss'],
})
export class SidehovermenuComponent implements OnInit {
  @Input() toggle: any;
  constructor() {}

  ngOnInit(): void {}
}
