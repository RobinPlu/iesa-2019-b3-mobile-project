import { Component, OnInit } from '@angular/core';
import { Router } from "../../../node_modules/@angular/router";

@Component({
  selector: 'app-betfake',
  templateUrl: './betfake.page.html',
  styleUrls: ['./betfake.page.scss'],
})
export class BetfakePage implements OnInit {

  constructor(private router: Router) { }


  ngOnInit() {
  }

}
