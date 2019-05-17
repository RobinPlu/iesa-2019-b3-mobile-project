import { Injectable } from '@angular/core';
import { Globalization } from '@ionic-native/globalization/ngx';


@Injectable({
  providedIn: 'root'
})
export class GlobalisationService {

    constructor(private globalization: Globalization) { }

    lang(){

        this.globalization.getPreferredLanguage()
            .then(res => console.log(res))
            .catch(e => console.log(e));
    }
}
