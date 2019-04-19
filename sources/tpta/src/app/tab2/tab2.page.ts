import { Component, ViewChild, ElementRef } from '@angular/core';
import { TabNameService } from './../tab-name.service';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import leaflet from 'leaflet';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    @ViewChild('map') mapContainer: ElementRef;
    map: any;
    constructor(private tabName: TabNameService, private geolocation: Geolocation) {
    }

    ionViewDidEnter() {
        this.loadmap();
    }

    opacity = 0;
    loadmap() {
        this.map = leaflet.map("map").fitWorld();
            leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attributions: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 19
        }).addTo(this.map);
        this.map.locate({
            setView: true,
            maxZoom: 19
        }).on('locationfound', (e) => {
            let markerGroup = leaflet.featureGroup();
            let marker: any = leaflet.marker([e.latitude, e.longitude]).on('click', () => {
                alert('Marker clicked');
            })
            markerGroup.addLayer(marker);
            this.map.addLayer(markerGroup);
        }).on('locationerror', (err) => {
            alert(err.message);
        })

    }

//     geoloc: any;
//     getGeolocation(){
//     this.geolocation.getCurrentPosition().then((resp) => {
//     // resp.coords.latitude
//     // resp.coords.longitude
// }).catch((error) => {
//     console.log('Error getting location', error);
// });
//
//
//      var watch = this.geolocation.watchPosition();
//     watch.subscribe((data) => {
//     // data can be a set of coordinates, or an error (if an error occurred).
//     // data.coords.latitude
//     // data.coords.longitude
//         this.geoloc = data;
// });
//     }
    locate(){
        this.opacity=1;

        this.geolocation.getCurrentPosition().then((resp) => {
            console.log("lat" + resp.coords.latitude + "- long" + resp.coords.longitude)
        }).catch((error) => {
            console.log('Error getting location', error);
        });
    }

}
