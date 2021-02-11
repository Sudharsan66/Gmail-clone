import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-email-wrapper',
  templateUrl: './email-wrapper.component.html',
  styleUrls: ['./email-wrapper.component.scss'],
})
export class EmailWrapperComponent implements OnInit {
content: any;
  labels = [
    { id: 1, icon: "desktop_mac", text: "primary", selected: true },
    { id: 2, icon: "people", text: "social", selected: false },
    { id: 3, icon: "bookmark_border", text: "promotions", selected: false },
    { id: 4, icon: "info_outline", text: "updates", selected: false },
    { id: 5, icon: "forum", text: "forums", selected: false },
  ];
  getData() {
    return this.httpClient.get(environment.API_BASE_URL + "/e-mails-list");
  }
  constructor(private httpClient: HttpClient) {}
  changeSelected(id: any) {
    var index = this.labels.findIndex((obj: any) => obj.selected == true);
    this.labels[index].selected = false;
    index = this.labels.findIndex((obj: any) => obj.id == id);
    this.labels[index].selected = true;
  }
  deleteEmail(id: number) {
    this.content = this.content.filter((mail: any) => mail.id !== id);
    this.httpClient
      .delete(environment.API_BASE_URL + '/e-mails-list/' + id)
      .subscribe((data) => {});
  }
  toggleMailStar(payload: any) {
    this.httpClient
      .put(environment.API_BASE_URL + '/e-mails-list/' + payload.id, {
        isStarred: payload.isStarred,
      })
      .subscribe((data) => {
        console.log('Checked star');
      });
  }
  ngOnInit(): void {this.getData().subscribe(val => this.content = val);}
}
