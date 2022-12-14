import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TableViewService } from './table-view/table-view.service';
import { DetailsViewComponent } from './details-view/details-view.component';

@NgModule({
  declarations: [AppComponent, TableViewComponent, DetailsViewComponent],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [TableViewService, HttpClient],
  bootstrap: [AppComponent],
})
export class AppModule {}
