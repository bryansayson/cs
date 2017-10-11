import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgDateRangePickerModule } from 'ng-daterangepicker';

import { AppComponent } from './app.component';
import { FeatureFilterPipe } from './pipes/feature-filter.pipe';
import { TagDetailComponent } from './components/tag-detail/tag-detail.component';

import { AppRoutes } from './app.routes';

import { DataService } from './services/data.service';
import { DateService } from './services/date.service';
import { TagListComponent } from './components/tag-list/tag-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FeatureFilterPipe,
    TagDetailComponent,
    TagListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    NgDateRangePickerModule
  ],
  providers: [DataService, DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
