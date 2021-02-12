import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DataServiceService } from './Core/Services/data-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Gmail-Clone';
  toggle: boolean = true;
  loading: boolean = true;
  @Output() globalSearch = new EventEmitter();
  constructor(private dataService: DataServiceService) {
    this.dataService.changeTheme(
      'url(https://lh3.ggpht.com/et0zbIr6unXq4O5_sfRVx2kt0i0ZkP4uvuJAnT0TQKCkmvYVGlsrr1DQ8hsQIcftAO-QxpSADcM)','#fff'
    );
  }
  ngOnInit() {
    this.dataService.loaderEmitter.subscribe((data) => {
      this.loading = data;
      console.log('Loading', data);
    });
  }
  setClass(toggle: any) {
    this.toggle = toggle;
  }
  globalMailSearch(searchVal: string) {
    this.globalSearch.emit(searchVal);
  }
}
