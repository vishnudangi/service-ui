import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Router} from "@angular/router"

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private router: Router) { }

  ngOnInit(): void {
    document.getElementById('button-id').addEventListener('click', this.redirectFunction.bind(this))
  }

  redirectFunction(){
    window.location.href = '/mockup-list'
    console.log('redirectFunction redirectFunction');
  }

}
