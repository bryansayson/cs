import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgDateRangePickerOptions } from 'ng-daterangepicker';
import { DateService } from '../../services/date.service';

@Component({
  selector: 'app-tag-detail',
  templateUrl: './tag-detail.component.html',
  styleUrls: ['./tag-detail.component.css']
})

export class TagDetailComponent implements OnInit {
  selectedTag: string;
  private sub: any;
  dates: string;
  start: string;
  end: string;
  options: NgDateRangePickerOptions;

  constructor(private route: ActivatedRoute, private dateService: DateService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.selectedTag = params.id;
    });

    this.options = {
      theme: 'gray',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yMd',
      outputFormat: 'DD/MM/YYYY',
      startOfWeek: 1
    };
  }

  fetchData(selectedDates) {
    if (selectedDates) {
      this.dates = selectedDates.split('-');
      this.start = new Date(this.dates[0]).toJSON();
      this.end = new Date(this.dates[1]).toJSON();
      console.log(this.start);
      console.log(this.end);

      this.dateService.getTags(this.selectedTag, this.start, this.end).subscribe((tags) => {
        console.log(tags);
      });
    }
  };

}
