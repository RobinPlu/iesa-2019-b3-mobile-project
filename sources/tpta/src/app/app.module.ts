import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouteReuseStrategy } from "@angular/router";
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
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
    ScreenOrientation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
