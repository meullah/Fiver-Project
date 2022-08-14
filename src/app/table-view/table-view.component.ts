import {
  HttpClient,
  HttpClientModule,
  HttpHandler,
} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TableViewService } from './table-view.service';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss'],
})
export class TableViewComponent implements OnInit {
  tableData: any;
  info: any[] = [];
  next: any = null;
  prev: any = null;
  self: any = null;

  constructor(
    private tableViewService: TableViewService,
    private router: Router
  ) {}
  ngOnInit() {
    this.getDataFromAPI();
  }
  getDataFromAPI(
    uri: string = this.tableViewService.apiRoot,
    pageLimit: string = '10'
  ) {
    this.tableViewService.getDataFromAPI(uri, pageLimit).subscribe(
      (data) => {
        // console.log(data);
        this.tableData = data;
        this.parseData(this.tableData);
      },
      (error) => {}
    );
  }

  parseData(_tableData: any) {
    for (var i in _tableData.data) {
      let address: any;
      let { submission_address, title, website } =
        _tableData.data[i].attributes;
      if (submission_address) {
        let {
          address_line1,
          address_line2,
          locality,
          administrative_area,
          postal_code,
          country_code,
        } = submission_address;
        let temp = [
          address_line1,
          address_line2,
          locality,
          administrative_area,
          postal_code,
          country_code,
        ];
        address = temp.join(', ');
      } else {
        address = '-';
      }

      if (website) {
        website = website.uri;
      } else {
        website = '-';
      }
      if (_tableData.data[i].links && _tableData.data[i].links.self) {
        this.self = _tableData.data[i].links.self.href;
      }
      let id = _tableData.data[i].id;
      this.info.push([title, website, address, this.self, id]);
    }
    if (_tableData.links.next) {
      this.next = _tableData.links.next.href;
    } else {
      this.next = null;
    }
    if (_tableData.links.prev) {
      this.prev = _tableData.links.prev.href;
    } else {
      this.prev = null;
    }
    // console.log(this.info);
  }

  nextClick() {
    this.info = [];
    this.getDataFromAPI(this.next, '10');
  }
  prevClick() {
    this.info = [];
    // console.log(this.prev);
    this.getDataFromAPI(this.prev, '10');
  }
  async openTab(link: any, id: any) {
    // console.log('Tab Clicked');
    // console.log(link);
    (await this.tableViewService.getDetailsFromAPI(link)).subscribe(
      (data) => {
        const detailsLink = link;
        this.tableViewService.detailsOfData = data;
        this.router.navigateByUrl('agency' + '/' + id);
      },
      (error) => {}
    );
  }
}
