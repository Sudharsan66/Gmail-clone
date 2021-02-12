import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../Core/Services/data-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {}
  darkTheme() {
    this.dataService.changeTheme('#000', '#fff');
  }
  lightTheme() {
    this.dataService.changeTheme('#fff', '#000');
  }
  defaultTheme() {
    this.dataService.changeTheme(
      'url(https://lh3.ggpht.com/et0zbIr6unXq4O5_sfRVx2kt0i0ZkP4uvuJAnT0TQKCkmvYVGlsrr1DQ8hsQIcftAO-QxpSADcM)',
      '#fff'
    );
  }
}
