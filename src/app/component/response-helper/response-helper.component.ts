import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-response-helper',
  templateUrl: './response-helper.component.html',
  styleUrls: ['./response-helper.component.scss']
})
export class ResponseHelperComponent implements OnInit {
  responseTempLateList: any = [];
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getResponseTemplate();
  }

  getResponseTemplate(){
    this.mainService.getResponseTemplateInfo().subscribe((data:any)=>{
      this.responseTempLateList = data.responseMessage;
    });
  }

}
