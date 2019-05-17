import { Component } from "@angular/core";
import { TabNameService } from "./../tab-name.service";
import { ContactsService } from "../contacts.service";
import { Contacts } from "@ionic-native/contacts";
import { Router } from "../../../node_modules/@angular/router";
import { NotificationService} from '../notification.service';
import { AnalyticsService } from'../analytics.service';
import {Badge} from '@ionic-native/badge/ngx';
import { TranslateService } from '@ngx-translate/core';
// import {Globalization} from '@ionic-native/globalization';
import { Globalization } from '@ionic-native/globalization/ngx';


// import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts/ngx';

@Component({
  selector: "app-tab1",
  templateUrl: "tab1.page.html",
  styleUrls: ["tab1.page.scss"]
})
export class Tab1Page {
    public title: string;
    public language: string;
    public notiftf: boolean ;
    public isToggled: boolean =true;

    public langdefault : string;
  constructor(
    private tabName: TabNameService,
    private contactService: ContactsService,
    private contacts: Contacts,
    private router: Router,
    private ana: AnalyticsService,
    public notif: NotificationService,
    public badge: Badge,
    private _translate: TranslateService,
    public globalization: Globalization
  ) {
      this.clearbadge();
  }
  go() {
    this.router.navigate(["bet"]);
  }
  example() {
    this.router.navigate(["betexample"]);
  }
  analy(){
    this.ana.analytic();
  }

clearbadge(){
    this.badge.set(0);
    this.badge.clear();
}
  contactsList: any;

    notify() {
        this.isToggled = !this.isToggled;
        if(this.isToggled = !this.isToggled){
            this.isToggled = false
        }else{
            this.isToggled = true
        }
    }
    fonctionNotif(){
        if (  this.isToggled === false){
            // console.log("true")
        }     else{
            // console.log("fa")
    this.notif.setnotif()
        }
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
    ionViewDidEnter(): void {
        // initialize
        this._initTranslate()
    }

    _initialiseTranslation(): void {
        // Get data with key 'TITLE'
        this._translate.get('TITLE').subscribe((res: string) => {
            console.log(res);
            this.title = res;
        });
        // // Get data with key 'description'
        // this._translate.get('description').subscribe((res: string) => {
        //     console.log(res);
        //     this.description = res;
        // });
        // // Get data with key 'TITLE_2' and `value` variable as 'John'
        // this._translate.get('TITLE_2', { value: 'John' }).subscribe((res: string) => {
        //     console.log(res);
        //     this.title_2 = res;
        // });
        // // Get data with nested key 'data.name' and `name_value` variable as 'Marissa Mayer'
        // this._translate.get('data.name', { name_value: 'Marissa Mayer' }).subscribe((res: string) => {
        //     console.log(res);
        //     this.name = res;
        // });
    }
    public changeLanguage(): void {
        this._translateLanguage();
    }

    _translateLanguage(): void {
        console.log('language', this.language)
        this._translate.use(this.language);
        this._initialiseTranslation();
    }

    _initTranslate() {
        // Set the default language for translation strings, and the current language.
        this._translate.setDefaultLang('en');

        if (this._translate.getBrowserLang() !== undefined) {
            this.language = this._translate.getBrowserLang();
            console.log('browser language is', this._translate.getBrowserLang());
        }
        else {
            // Set your language here
            this.language = 'en';
        }

        this._translateLanguage();
    }
    getDeviceLanguage() {
        this.globalization.getPreferredLanguage().then(res => {
// Run other functions after getting device default lang
            this._initTranslate()
        })
            .catch(e => this.langdefault = e);
    }

}
