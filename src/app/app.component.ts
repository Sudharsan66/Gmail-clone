import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gmail-Clone';
  toggle: boolean = true;
  content: any;
  labels = [
    { id: 1, icon: "desktop_mac", text: "primary", selected: true },
    { id: 2, icon: "people", text: "social", selected: false },
    { id: 3, icon: "bookmark_border", text: "promotions", selected: false },
    { id: 4, icon: "info_outline", text: "updates", selected: false },
    { id: 5, icon: "forum", text: "forums", selected: false },
  ];

  ngOnInit() {
    this.getData().subscribe(val => this.content = val);
  }
  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get(environment.API_BASE_URL + "/e-mails-list");
  }
  changeSelected(id: any) {
    var index = this.labels.findIndex((obj: any) => obj.selected == true);
    this.labels[index].selected = false;
    index = this.labels.findIndex((obj: any) => obj.id == id);
    this.labels[index].selected = true;
  }
  setClass(toggle: any) {
    this.toggle = toggle;
  }
  deleteEmail(id: number) {
    this.content = this.content.filter((mail: any) => mail.id !== id);
    this.httpClient.delete(environment.API_BASE_URL + "/e-mails-list/" + id).subscribe(data => {
    });

  }
  toggleMailStar(payload: any) {
    this.httpClient.put(environment.API_BASE_URL + "/e-mails-list/" + payload.id, { isStarred: payload.isStarred }).subscribe(data => {
      console.log("Checked star");
    })
  }

}
