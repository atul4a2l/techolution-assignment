import { Component, OnInit } from '@angular/core';
interface Result {
  name:string,
  marks:{
      Maths:string,
      English:string,
      Science:string
  },
  rollNumber:string
}
@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit  {
  results=[];
  resultData :Result[]= [
    {
        "name":"rajiv",
        "marks":{
            "Maths":"18",
            "English":"21",
            "Science":"45"
        },
        "rollNumber":"KV2017-5A2"
    },
    {
        "name":"abhishek",
        "marks":{
            "Maths":"43",
            "English":"30",
            "Science":"37"
        },
        "rollNumber":"KV2017-5A1"
    },
    {
        "name":"zoya",
        "marks":{
            "Maths":"42",
            "English":"31",
            "Science":"50"
        },
        "rollNumber":"KV2017-5A3"
    },
    {
      "name":"Atul",
      "marks":{
          "Maths":"20",
          "English":"20",
          "Science":"20"
      },
      "rollNumber":"KV2017-5A0"
  },
  {
    "name":"Shashwat",
    "marks":{
        "Maths":"50",
        "English":"50",
        "Science":"50"
    },
    "rollNumber":"KV2017-5A0"
}      
]
  constructor() {

   }

  checkResult(arr){
  arr.forEach(element => {
    var sum = Object.values(element.marks).reduce((a:string, b:string)=>{
      return parseInt(a) + parseInt(b);
    });
    element.totalMarks=sum;
    this.results.push(element)
    const isBelowThreshold = (currentValue) => currentValue >= 20;
    element.status=Object.values(element.marks).every(isBelowThreshold)==true?'Pass':'Fail'
    });
    const max = this.results.reduce((a, b) =>{
      return (a.totalMarks > b.totalMarks) ? a : b
    })
    max.status='Topper'
  }
  ngOnInit(){
    this.checkResult(this.resultData)
  }
}
