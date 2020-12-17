import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service'


@Component({
  selector: 'app-server-detail',
  templateUrl: './server-detail.component.html',
  styleUrls: ['./server-detail.component.scss']
})
export class ServerDetailComponent implements OnInit {
  serverDetail:any = '';
  constructor(private mainService: MainService) { }


  ngOnInit(): void {
    this.getServerDetail();
  }

  getServerDetail(){
    this.mainService.getServerDetail().subscribe((data: any) => {
      this.serverDetail = data.responseMessage;
    });
  };

}
