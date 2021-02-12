import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DataServiceService } from '../Core/Services/data-service.service';


interface Email {
  id: number;
  category: string,
  data: string,
  date: Date,
  email: string,
  isRead: boolean,
  isStarred: boolean,
  subject: boolean,
  title: string,
}

@Component({
  selector: 'app-single-mail',
  templateUrl: './single-mail.component.html',
  styleUrls: ['./single-mail.component.scss']
})
export class SingleMailComponent implements OnInit {


  id: any;
  email: any;
  constructor(private route: ActivatedRoute, private httpClient: HttpClient, private dataService: DataServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);

    this.getSingleEmail().subscribe((data) => {
      console.log(data);
      this.email = data;
    });
    this.dataService.setEmailRead(this.id, true);
  }
  getSingleEmail() {
    return this.httpClient.get(environment.API_BASE_URL + "/e-mails-list/" + this.id);
  }
  unReadMail() {
    this.dataService.setEmailRead(this.id, false);
  }
}
