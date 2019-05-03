import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";

@Component({
  selector: "app-bet",
  templateUrl: "./bet.page.html",
  styleUrls: ["./bet.page.scss"]
})
export class BetPage implements OnInit {
  constructor(private router: Router) {}

  go() {
    this.router.navigate(["betfake"]);
  }

  ngOnInit() {}
}
