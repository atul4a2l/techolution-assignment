import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent  {
  results=[];

  constructor(private appService:AppServiceService) {
    this.appService.getStudentResult().subscribe(response=>this.checkResult(response))
   }

  checkResult(arr){
  arr.forEach(element => {
    var sum = Object.values(element.marks).reduce((a:string, b:string)=>{
      return parseInt(a) + parseInt(b);
    });
    element.totalMarks=sum;
    this.results.push(element)
    const isBelowThreshold = (currentValue) => currentValue > 20;
    element.status=Object.values(element.marks).every(isBelowThreshold)==true?'Pass':'Fail'
    });
    const max = this.results.reduce((a, b) =>{
      return (a.totalMarks > b.totalMarks) ? a : b
    })
    max.status='Topper'
  }
}
