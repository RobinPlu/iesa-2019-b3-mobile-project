import { Component, OnInit } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import {NotificationService} from "../notification.service";

@Component({
  selector: "app-bet",
  templateUrl: "./bet.page.html",
  styleUrls: ["./bet.page.scss"]
})
export class BetPage implements OnInit {
  calendars = [];
  constructor(
    private router: Router,
    private notif: NotificationService
  ) {  }

  go() {
    this.router.navigate(["betfake"]);

      this.notif.setnotif();
  }

  ngOnInit() {}
}
