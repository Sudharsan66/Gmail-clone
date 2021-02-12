import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  @Output() globalMailSearchEmitter = new EventEmitter();
  @Output() loaderEmitter = new EventEmitter();

  constructor(private httpClient: HttpClient) { }
  getData() {
    this.loaderEmitter.emit(true);
    return this.httpClient.get(environment.API_BASE_URL + "/e-mails-list");
  }
  deleteMail(id: number) {
    this.loaderEmitter.emit(true);
    this.httpClient
      .delete(environment.API_BASE_URL + '/e-mails-list/' + id)
      .subscribe((data) => {
        console.log("Successfully Deleted!");
        this.loaderEmitter.emit(false);
      }, (err) => {
        console.error("Failed to delete!");
        this.loaderEmitter.emit(false);
      });
  }
  toggleStarredMail(payload: any) {
    this.httpClient
      .put(environment.API_BASE_URL + '/e-mails-list/' + payload.id, {
        isStarred: payload.isStarred,
      })
      .subscribe((data) => {
        console.log('Checked star');

      });
  }
  searchMailList(searchQuery: string) {
    this.loaderEmitter.emit(true);
    return this.httpClient
      .get(environment.API_BASE_URL + '/e-mails-list?search=' + searchQuery);

  }
  getContent(page:number,limit:number) {
    this.loaderEmitter.emit(true);
    return this.httpClient
      .get(environment.API_BASE_URL + 'e-mails-list?page=' + page+'&limit='+limit);
  }
  setEmailRead(id: number, isReadMail: boolean) {
    this.httpClient
      .put(environment.API_BASE_URL + '/e-mails-list/' + id, {
        isRead: isReadMail
      })
      .subscribe((data) => {
        console.log('Checked ERad');
      });
  }
}
