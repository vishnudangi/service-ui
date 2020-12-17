import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service'

@Component({
  selector: 'app-mockup-listing',
  templateUrl: './mockup-listing.component.html',
  styleUrls: ['./mockup-listing.component.scss']
})
export class MockupListingComponent implements OnInit {
  list: any = '';
  mockupList:any = [];
  constructor(private mainService: MainService) { }

  ngOnInit(): void {
    this.getMockupList()
  };

  getMockupList(){
    this.mainService.getMockupList().subscribe((data:any)=>{
      console.log('list data', data);
      this.mockupList = data.responseMessage;
    });
  }

}
