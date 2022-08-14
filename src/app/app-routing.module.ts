import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsViewComponent } from './details-view/details-view.component';
import { TableViewComponent } from './table-view/table-view.component';

const routes: Routes = [
  {
    path: 'home',
    component: TableViewComponent,
  },
  {
    path: 'agency/:agencyID',
    component: DetailsViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
