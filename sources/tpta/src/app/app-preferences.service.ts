import { Injectable } from '@angular/core';
import { AppPreferences } from '@ionic-native/app-preferences/ngx';

@Injectable({
  providedIn: 'root'
})
export class AppPreferencesService {

    constructor(private appPreferences: AppPreferences) { }

     AppPreference (){

        this.appPreferences.fetch('key').then((res) => { console.log(res); });
    }
}


