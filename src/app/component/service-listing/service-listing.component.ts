import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-service-listing',
  templateUrl: './service-listing.component.html',
  styleUrls: ['./service-listing.component.scss']
})
export class ServiceListingComponent implements OnInit {
  serviceList: any = [];

  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getServiceList();
  }
  
  getServiceList(){
    this.mainService.getServiceList().subscribe((data: any) => {
      this.serviceList = data.responseMessage;
    });
  }

}
