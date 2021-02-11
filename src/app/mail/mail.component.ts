import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {
  @Input() item: any;
  @Output() deleteEmitter = new EventEmitter<number>();
  @Output() starredEmitter = new EventEmitter<object>();


  icons = ["archive", "delete", "email", "access_time"]
  constructor() { }
  changeStar() {

  }
  ngOnInit(): void {
  }
  deleteMail(id: number) {
    this.deleteEmitter.emit(id);
  }
  toggleStarred(e: any, id: number) {
    let payload = {
      id: id,
      isStarred: e.target.checked,
    }
    this.starredEmitter.emit(payload);
  }
}
