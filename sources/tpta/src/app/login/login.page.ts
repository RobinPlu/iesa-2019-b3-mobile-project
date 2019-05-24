import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import {AnalyticsService} from "../analytics.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private router: Router,
              private ana: AnalyticsService
              ) {}

  go() {

      this.ana.analytic();
    this.router.navigate(["home"]);
  }
  ngOnInit() {}
}
