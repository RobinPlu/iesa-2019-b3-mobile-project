import { Injectable } from '@angular/core';
import { GoogleAnalytics } from '@ionic-native/google-analytics/ngx';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private ga: GoogleAnalytics) { }
  analytic(){
    this.ga.startTrackerWithId('UA-139455640-2')
.then(() => {
    console.log('Google analytics is ready now');
    this.ga.trackView('test');
    // Tracker is ready
    // You can now track pages or set additional information such as AppVersion or UserId
})
.catch(e => console.log('Error starting GoogleAnalytics', e));
}
}
