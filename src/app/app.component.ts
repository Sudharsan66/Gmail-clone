import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataServiceService } from './Core/Services/data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Gmail-Clone';
  toggle: boolean = true;
  loading: boolean = true;
  @Output() globalSearch = new EventEmitter();
  constructor(private dataService: DataServiceService) { }
  ngOnInit() {
    this.dataService.loaderEmitter.subscribe(data => {
      this.loading = data;
      console.log("Loading", data);
    })
  }
  setClass(toggle: any) {
    this.toggle = toggle;
  }
  globalMailSearch(searchVal: string) {
    this.globalSearch.emit(searchVal);
  }
}
