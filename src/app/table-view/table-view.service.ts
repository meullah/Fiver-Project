
import { EventEmitter } from "@angular/core";
import { Injectable, Output } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class TableViewService {
 
  apiRoot: string = environment.base_api_url;
  apiKey: string = environment.api_key;
  
  constructor(
    private http: HttpClient) {
  }

  public getDataFromAPI() {
    let apiURL =
      environment.base_api_url ;
      return this.http.get(environment.base_api_url, {
        headers: {
            "X-API-Key":"xEpQxqrBddP3zgfIOD3xYKiuOn724lOaOlWclJfa"
        },
      });
  }
}
