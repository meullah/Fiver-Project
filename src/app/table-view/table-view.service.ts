import { EventEmitter } from '@angular/core';
import { Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TableViewService {
  apiRoot: string = environment.base_api_url;
  apiKey: string = environment.api_key;
  detailsOfData: any;

  constructor(private http: HttpClient) {}

  public getDataFromAPI(uri: string = this.apiRoot, pageLimit: string = '10') {
    return this.http.get(uri + '&page[limit]=' + pageLimit, {
      headers: {
        'X-API-Key': this.apiKey,
      },
    });
  }
  public getDetailsFromAPI(agency_id: string) {
    return this.http.get(environment.details_base_url + agency_id, {
      headers: {
        'X-API-Key': this.apiKey,
      },
    });
  }
}
