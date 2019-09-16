import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';
import data from "../data.js"

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
  public pieChartLabels: Label[] = [
    // 'Laptop', 'Handphone', 'Tablets'
  ];
  public pieChartData: number[] = [
    //  50, 20, 40, 10, 14, 45, 99, 100
  ];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  constructor() { }

  ngOnInit() {
    
    const datas = data
    const tempData = {}

    for(let allData of datas){

      for( let tag of allData.tags){
          if(tempData[tag]){
            tempData[tag] += allData.likes
          }
          else{
            tempData[tag] = allData.likes
          }
        }
      }
     
    for(let tag in tempData){
      // console.log(tempData[tag])
      this.pieChartLabels.push(tag)
      this.pieChartData.push(tempData[tag])
    }

    console.log(this.pieChartData)
  }
}
