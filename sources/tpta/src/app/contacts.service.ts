import { Injectable } from '@angular/core';
import { Contacts } from '@ionic-native/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
    constructor(private contacts: Contacts) { }

    getContacts() {
        console.log('all contacts')
    }

}
