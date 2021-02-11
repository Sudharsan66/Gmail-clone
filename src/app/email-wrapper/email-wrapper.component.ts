import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import * as appConstants from "src/app/Core/constants/appConstants";
import { DataServiceService } from '../Core/Services/data-service.service';
@Component({
  selector: 'app-email-wrapper',
  templateUrl: './email-wrapper.component.html',
  styleUrls: ['./email-wrapper.component.scss'],
})
export class EmailWrapperComponent implements OnInit {
  content: any;
  labels: any;
  constructor(private httpClient: HttpClient, private dataService: DataServiceService) { }
  ngOnInit(): void {
    this.labels = appConstants.labels;
    this.dataService.loaderEmitter.emit(true);
    this.dataService.getData().subscribe(val => {
      this.content = val
      this.dataService.loaderEmitter.emit(false);
    });

    this.dataService.globalMailSearchEmitter.subscribe((val => {
      this.dataService.searchMailList(val).subscribe(data => {
        this.content = data;
        this.dataService.loaderEmitter.emit(false);
      });
    }));
  }

  changeSelected(id: any) {
    var index = this.labels.findIndex((obj: any) => obj.selected == true);
    this.labels[index].selected = false;
    index = this.labels.findIndex((obj: any) => obj.id == id);
    this.labels[index].selected = true;
  }
  deleteEmail(id: number) {
    this.content = this.content.filter((mail: any) => mail.id !== id);
    this.dataService.deleteMail(id);
  }
  toggleMailStar(payload: any) {
    this.dataService.toggleStarredMail(payload);
  }

}
