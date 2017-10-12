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
  stats: Array<any>;
  options: NgDateRangePickerOptions;

  // LINE CHART START
  public lineChartData:Array<any> = [];
  public lineChartLabels:Array<any> = [];
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  //LINE CHART END

  constructor(private route: ActivatedRoute, private dateService: DateService) { }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.selectedTag = params.id;
    });

    // set default dates when first landing on the page
    let twodaysago = new Date(new Date().getTime() - (48 * 60 * 60 * 1000));
    let now = new Date();

    this.start = twodaysago.toJSON();
    this.end = now.toJSON();

    this.dateService.getTags(this.selectedTag, this.start, this.end).subscribe((tags) => {
      let data = {data: [], label: this.selectedTag};
      this.lineChartData = [];
      this.lineChartLabels = [];
      tags.reverse().forEach((tag) => {
        data.data.push(tag.value);
        this.lineChartLabels.push(new Date(tag.observationTS).toLocaleString('en-us'));
      });
      this.lineChartData.push(data);
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

      this.dateService.getTags(this.selectedTag, this.start, this.end).subscribe((tags) => {
        let data = {data: [], label: this.selectedTag};
        this.lineChartData = [];
        this.lineChartLabels = [];
        tags.reverse().forEach((tag) => {
          data.data.push(tag.value);
          this.lineChartLabels.push(new Date(tag.observationTS).toLocaleString('en-us'));
        });
        this.lineChartData.push(data);
        console.log('DONE');
        console.log(this.lineChartData);
        console.log(this.lineChartLabels);
      });
    }
  };

}
