import { Component, OnInit } from '@angular/core';
import { TableViewService } from '../table-view/table-view.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-view',
  templateUrl: './details-view.component.html',
  styleUrls: ['./details-view.component.scss'],
})
export class DetailsViewComponent implements OnInit {
  detailsData: any;
  agencyID: string = '';
  constructor(
    private tableViewService: TableViewService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((params) => {
      this.agencyID = params.agencyID;
    });
    this.tableViewService.getDetailsFromAPI(this.agencyID).subscribe(
      (data) => {
        this.detailsData = data;
        if (this.detailsData.data.relationships) {
          this.detailsData = Object.keys(this.detailsData.data.relationships);
        }
        console.log(this.detailsData);
      },
      (error) => {}
    );
  }

  ngOnInit(): void {}
}
