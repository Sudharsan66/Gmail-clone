import { TestBed } from '@angular/core/testing';

import { DataServiceService } from './data-service.service';
import {
  HttpClient,
  HttpClientModule,
  HttpErrorResponse,
  HttpRequest,
} from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { environment } from 'src/environments/environment';

describe('DataServiceService', () => {
  let service: DataServiceService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataServiceService],
    });
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.inject(DataServiceService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have null data in search request', async () => {
    var searchQuery = 'siva';
    console.log(searchQuery);
    service.searchMailList(searchQuery).subscribe((data) => {});
    httpTestingController.expectOne((req: HttpRequest<any>) => {
      const body = req.body;
      expect(searchQuery).not.toEqual("");
      req.url === environment.API_BASE_URL + '/e-mails-list/?search=' &&
        req.method === 'PUT' &&
        req.headers.get('Content-type') === 'application/json';
      return true;
    });
  });
});
