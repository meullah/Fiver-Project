import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TableViewService } from './table-view.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {

  constructor(
    private tableViewService : TableViewService
  ) { 
    this.getDataFromAPI();
  }

  ngOnInit(): void {
  }
  
  getDataFromAPI() {
    this.tableViewService.getDataFromAPI()
      .subscribe(data => {
        console.log(data);
      }, error => {
      });
  }
}
