import { Component } from '@angular/core';
import {Router} from "@angular/router"
import { MainService } from './service/main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router, private mainService: MainService) { }

  ngOnInit(): void {
  };


  redirectToHome(redirectTo){
    this.router.navigate(redirectTo);
  }
}
