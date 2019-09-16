import { Component, OnInit } from '@angular/core';
import { Label } from 'ng2-charts';
import { ChartType, ChartDataSets } from 'chart.js';
import data from "../data.js"

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  public barChartLabels: Label[] = []
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartData: ChartDataSets[] = [
    // { data: [5, 15, 14, 7], label: 'Inspiron' },
    //  { data: [10, 12, 8, 8], label: 'Latitude' },
    //  { data: [10, 12, 8, 8], label: 'XPS' }
  ];
  public chartOption = {
    responsive: true,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true
          }
        }
      ]
    }
  }

  constructor() { }

  ngOnInit() {
    const datas = data
    const tempData = {}

    for(let allData of datas){
      let month = new Date(allData.dateAdded).getMonth() + 1
      // console.log(month)
      for( let tag of allData.tags){
        if(tempData[month]){
          if(tempData[month][tag]){
            tempData[month][tag] += allData.likes
          }
          else{
            tempData[month][tag] = allData.likes
          }
        }
        else{
          tempData[month]={}
          tempData[month][tag] = allData.likes
        }
        // console.log(month + " " + tag)
        // console.log(tempData[month][tag])
      }
    }
    // console.log(tempData)
    const tagLikeCount = {}
    for(let month in tempData){
      if(!this.barChartLabels.includes(month)){
        this.barChartLabels.push(month)
      }
      //  console.log("tag: " + tag)
      for(let tag in tempData[month]){
        if(tagLikeCount[tag]){
          tagLikeCount[tag].push(tempData[month][tag])
        }
        else{
          tagLikeCount[tag] = [tempData[month][tag]]
        }
      }
    }

    for(let tag in tagLikeCount){
      this.barChartData.push(
        {data: tagLikeCount[tag], label: tag}
      );
    }
    console.log(this.barChartData)
  }

}
