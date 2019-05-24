import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {Router, RouteReuseStrategy} from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { IonicModule, IonicRouteStrategy } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { Contacts } from "@ionic-native/contacts";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Media, MediaObject } from "@ionic-native/media/ngx";
import { File } from "@ionic-native/file/ngx";
import { MediaCapture } from "@ionic-native/media-capture/ngx";
import { IonicStorageModule } from "@ionic/storage";

import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
import { GoogleAnalytics } from "@ionic-native/google-analytics/ngx";
import { Badge } from "@ionic-native/badge/ngx";
import { ScreenOrientation } from "@ionic-native/screen-orientation/ngx";
import { Calendar } from '@ionic-native/calendar/ngx';
import {TabNameService} from "./tab-name.service";
import {ContactsService} from "./contacts.service";
import {AnalyticsService} from "./analytics.service";
import {NotificationService} from "./notification.service";

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,

    IonicStorageModule.forRoot(),
      HttpClientModule,
      TranslateModule.forRoot({
          loader: {
              provide: TranslateLoader,
              useFactory: HttpLoaderFactory,
              deps: [HttpClient]
          }
      }),

      IonicModule.forRoot(),
    AppRoutingModule

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Contacts,
    Diagnostic,
    AndroidPermissions,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    MediaCapture,
    Media,
    File,
    Geolocation,
    LocalNotifications,
    GoogleAnalytics,
    Badge,
    ScreenOrientation,
    Calendar
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
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
        private _translate: TranslateService
    ) {
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
}
