import { Component } from '@angular/core';
import { TabNameService } from './../tab-name.service';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    constructor(private tabName: TabNameService) {
    }
}
