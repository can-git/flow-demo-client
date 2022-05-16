import { Component, OnInit, ViewChild  } from '@angular/core';
import { FlowDataService } from 'src/app/services/flow-data.service';
// import { map } from 'rxjs';
import { FlowData } from 'src/app/flow-data.model';
import { formatDate } from "@angular/common";

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // chart1!: ChartType;
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions> | any;
  public allValues:[];
  public allCounts:[];
  private tempData!:FlowData[];
  // chart:Chart;
  

  constructor(private flowData:FlowDataService) {
    // this.chart1 = chart1;
    
   }

  ngOnInit() {
    this.getRepos();
  }

  public getRepos(){
    this.flowData.dailyData()
    .subscribe(
      (response) =>{
        this.allValues = response.map((t: { value: any; }) => t.value);
        this.allCounts = response.map((t: {count:any;}) => t.count);

        this.chartOptions = {
          series: [
            {
              name: "Value",
              data: this.allCounts
            }
          ],
          size:{
            width:700
          },
          chart: {
            height: 400,
            type: "line",
            zoom:{
              enabled:false
            }
          },
          dataLabels:{
            enabled:false
          },
          stroke:{
            curve:"smooth"
          },
          grid: {
            row: {
              colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
              opacity: 0.5
            }
          },
          title: {
            text: "Line Chart"
          },
          xaxis: {
            categories: this.allValues
          }
        };
        
      }
    );
  }
}
