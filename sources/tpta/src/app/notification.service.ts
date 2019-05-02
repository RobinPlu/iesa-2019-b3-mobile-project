import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    constructor(private localNotifications: LocalNotifications) { }
setnotif(){

// Schedule a single notification
    this.localNotifications.schedule({
        id: 1,
        text: 'Vous avez bien ajouté cet excrément',
    });
}
}