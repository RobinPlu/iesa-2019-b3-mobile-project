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
    constructor(private contacts: Contacts) { }
    let contact: Contact = this.contacts.create();

    contact.name = new ContactName(null, 'Smith', 'John');
    contact.phoneNumbers = [new ContactField('mobile', '6471234567')];
    contact.save().then(
() => console.log('Contact saved!', contact),
(error: any) => console.error('Error saving contact.', error)
);
}
