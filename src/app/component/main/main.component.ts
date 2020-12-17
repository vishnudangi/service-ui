import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  apiTypeList: any = [
    {value: 'POST', label: 'POST'},
    {value: 'GET', label: 'GET'},
    {value: 'UPDATE', label: 'UPDATE'},
    {value: 'DELETE', label: 'DELETE'}
  ];
  apiType: string = 'GET';
  apiPath: string = '';
  expectedResponse: any = '';
  listData: any = '';
  responseBody: any = '';
  myName: string= 'Vishnu';

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
  }
  apiTypeChange(){
    console.log('apiTypeChange apiTypeChange', this.apiType);
  }

  saveApiChanges(){
    console.log('onSubmit apiType', this.apiType);
    console.log('onSubmit apiPath', this.apiPath);
    console.log('onSubmit expectedResponse', this.expectedResponse);
    this.mainService.getNews();
    this.mainService.getNews().subscribe((data)=>{
      console.log(data);
      this.responseBody = data;
    });
  }

}
