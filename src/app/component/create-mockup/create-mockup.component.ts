import { Component, OnInit,  ViewChild} from '@angular/core';
import { MainService } from '../../service/main.service'
import { MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../../component/dialog/dialog.component';


@Component({
  selector: 'app-create-mockup',
  templateUrl: './create-mockup.component.html',
  styleUrls: ['./create-mockup.component.css']
})
export class CreateMockupComponent implements OnInit {
  @ViewChild('menuTrigger') dialogComponent: DialogComponent;

  apiTypeList: any = [
    { value: 'POST', label: 'POST' },
    { value: 'GET', label: 'GET' },
    { value: 'PUT', label: 'PUT' },
    { value: 'DELETE', label: 'DELETE' }
  ];
  responseCodeList: number[] = [100, 101, 102, 103, 104, 200, 201, 202, 203, 204, 205, 206, 207, 300, 301, 302, 303, 304, 305, 306, 307, 400,
    401, 402, 403, 404, 405, 406, 407, 501, 502, 503, 504, 505, 506, 507];
  typeOfApi: string = 'GET';
  mockApiType: string = '';
  apiName: string = '';
  apiPath: string = '';
  enableProxy: boolean = true;
  expectedResponse: any = '';
  serviceId: any = '';
  responseCode: any = 200;
  mockupTypeList: any = [];
  serviceTypeList: any = [];
  keyword:string = '';
  requestBody: string = '';


  responseBody: any = '';


  constructor(private mainService: MainService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getMockupList();
    this.getServiceList();
  };


  getMockupList() {
    this.mainService.getMockupApiType().subscribe((data: any) => {
      this.mockupTypeList = data.responseMessage;
    });
  };

  getServiceList() {
    this.mainService.getAllServiceType().subscribe((data: any) => {
      console.log('list data', data);
      this.serviceTypeList = data.responseMessage;
    });
  };

  saveApiChanges() {
    let requst = {
      typeOfApi: this.typeOfApi,
      mockApiType: this.mockApiType,
      apiName: this.apiName,
      apiPath: this.apiPath,
      enableProxy: this.enableProxy,
      expectedResponse: JSON.stringify(this.expectedResponse),
      serviceId: this.serviceId,
      responseCode: this.responseCode,
      keyword: this.keyword
    }
  let body = {}
  if(this.mockApiType === 'ONLY_REQUEST_BODY' || this.mockApiType === 'WITH_QUERY_PARAM_AND_REQUEST_BODY'){
    body = {
      requestBody : this.requestBody
    }
  }
    this.mainService.saveMockup(body, requst).subscribe((data:any) => {
      console.log(data);
      this.responseBody = data.responseMessage;
      var dialogRef = this.dialog.open(DialogComponent, {
        width: '450px',
        data: this.responseBody
      });
    });
  };
}
