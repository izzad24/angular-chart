import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import data from "../data.js"

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[] = [
      // { data: [10, 20, 30], label: 'Series 1' },
    //  { data: [5, 30, 15], label: 'Series 2' }
  ];
  public lineChartLabels: Label[] = [];
  public lineChartLegend = true;
  public lineChartType = 'line';

  constructor() { }

  ngOnInit() {
    const datas = data
    const tempData = {}
    const imagePerMonth = []

    for(let allData of datas){
      let month = new Date(allData.dateAdded).getMonth() + 1
      // console.log(month)
      if(!tempData[month]){
        tempData[month] = 1
      }
      else{
        tempData[month] +=1
      }
    }
    // console.log(tempData)

  
    for(let month in tempData){
       if(!this.lineChartLabels.includes(month)){
         this.lineChartLabels.push(month)
       }
    imagePerMonth.push(tempData[month])
    }
    this.lineChartData.push({ data: imagePerMonth, label: 'Images per month'})
    console.log(this.lineChartData)
  }

}
