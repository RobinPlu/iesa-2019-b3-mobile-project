import { Injectable } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Badge } from '@ionic-native/badge/ngx';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {
    constructor(private localNotifications: LocalNotifications, private badge: Badge) { }
setnotif(){

    this.badge.set(1);
// Schedule a single notification
    this.localNotifications.schedule({
        id: 1,
        text: 'Vous avez bien ajouté ce paris',
    });
}
}