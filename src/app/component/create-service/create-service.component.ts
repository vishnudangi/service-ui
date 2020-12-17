import { Component, OnInit } from '@angular/core';
import { MainService } from '../../service/main.service';
import { MatDialog} from '@angular/material/dialog';
import { ServiceDialogComponent } from '../../component/service-dialog/service-dialog.component';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.css']
})
export class CreateServiceComponent implements OnInit {
  name:string = '';
  host:string = '';
  port:any = '';
  pingsPerMinute:string = '';
  active: boolean = true;
  responseBody:any ='';


  constructor(private mainService: MainService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  saveApiChanges() {
    let requst = {
      name: this.name,
      host: this.host,
      port: this.port,
      pingsPerMinute: this.pingsPerMinute,
      active: this.active
    }
    this.mainService.saveService({}, requst).subscribe((data:any) => {
      console.log('data', data);
      this.responseBody = data.responseMessage;
      console.log('this.responseBody', this.responseBody);
      var dialogRef = this.dialog.open(ServiceDialogComponent, {
        width: '450px',
        data: this.responseBody
      });
    });
  };
}
