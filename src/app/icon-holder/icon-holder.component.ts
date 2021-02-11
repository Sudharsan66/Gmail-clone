import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataServiceService } from '../Core/Services/data-service.service';

@Component({
  selector: 'app-icon-holder',
  templateUrl: './icon-holder.component.html',
  styleUrls: ['./icon-holder.component.scss']
})
export class IconHolderComponent implements OnInit {

  constructor() { }
  @Output() unreadEmitter = new EventEmitter();
  ngOnInit(): void {
  }
  unReadMail() {
    this.unreadEmitter.emit();
  }
}
