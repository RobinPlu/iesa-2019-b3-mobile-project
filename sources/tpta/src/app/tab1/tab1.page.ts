import { Component } from "@angular/core";
import { TabNameService } from "./../tab-name.service";
import { ContactsService } from "../contacts.service";
import { Contacts } from "@ionic-native/contacts";
import { Router } from "../../../node_modules/@angular/router";
import { NotificationService} from '../notification.service';
import { AnalyticsService } from'../analytics.service';
import {Badge} from '@ionic-native/badge/ngx';

// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
  constructor(
    private tabName: TabNameService,
    private contactService: ContactsService,
    private contacts: Contacts,
    private router: Router,
    private ana: AnalyticsService,
    public notif: NotificationService,
    public badge: Badge
  ) {
      this.clearbadge();
  }
  go() {
    this.router.navigate(["bet"]);
  }
  example() {
    this.router.navigate(["betfake"]);
  }
  analy(){
    this.ana.analytic();
  }

clearbadge(){
    this.badge.set(0);
    this.badge.clear();
}
  contactsList: any;

  fonctionNotif(){
    this.notif.setnotif()
  }
    fonctionAnalitycs(){
    this.ana.analytic()
  }

  getContacts() {
    console.log("getContacts");
    this.contacts
      .find(["displayName", "name", "phoneNumbers"], {
        filter: "",
        multiple: true
      })
      .then(data => {
        console.log(data);
        this.contactsList = data;
      });
  }
}
