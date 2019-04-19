import { Component } from "@angular/core";
import { TabNameService } from "./../tab-name.service";
import { ContactsService } from "../contacts.service";
import { Contacts } from "@ionic-native/contacts";
import { Router } from "../../../node_modules/@angular/router";

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
    private router: Router
  ) {}
  go() {
    this.router.navigate(["bet"]);
  }
  example() {
    this.router.navigate(["betexample"]);
  }

  contactsList: any;

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
