import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Router } from "../../../node_modules/@angular/router";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import leaflet from "leaflet";
import { Media, MediaObject } from "@ionic-native/media/ngx";
import { File } from "@ionic-native/file/ngx";
import { MediaCapture } from "@ionic-native/media-capture/ngx";
import { Storage } from "@ionic/storage";
import {
  FileTransfer,
  FileUploadOptions,
  FileTransferObject
} from "@ionic-native/file-transfer/ngx";
const MEDIA_FILES_KEY = "mediaFiles";

@Component({
  selector: "app-betfake",
  templateUrl: "./betfake.page.html",
  styleUrls: ["./betfake.page.scss"]
})
export class BetfakePage implements OnInit {
  @ViewChild("map") mapContainer: ElementRef;
  map: any;
  mediaFiles = [];

  constructor(
    private mediaCapture: MediaCapture,
    private storage: Storage,
    private file: File,
    private media: Media,
    private geolocation: Geolocation
  ) {}

  ionViewDidLoad() {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      this.mediaFiles = JSON.parse(res) || [];
    });
  }

  captureAudio() {
    this.mediaCapture.captureAudio().then(res => {
      this.storeMediaFiles(res);
    });
  }

  play(myFile) {
    if (myFile.name.indexOf(".wav") > -1) {
      const audioFile: MediaObject = this.media.create(myFile.localURL);
      audioFile.play();
    } else {
      let path = this.file.dataDirectory + myFile.name;
      let url = path.replace(/^file:\/\//, "");
    }
  }
  storeMediaFiles(files) {
    this.storage.get(MEDIA_FILES_KEY).then(res => {
      if (res) {
        let arr = JSON.parse(res);
        arr = arr.concat(files);
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(arr));
      } else {
        this.storage.set(MEDIA_FILES_KEY, JSON.stringify(files));
      }
      this.mediaFiles = this.mediaFiles.concat(files);
    });
  }
  ionViewDidEnter() {
    this.loadmap();
  }

  opacity = 0;
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet
      .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attributions:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 19
      })
      .addTo(this.map);
    this.map
      .locate({
        setView: true,
        maxZoom: 19
      })
      .on("locationfound", e => {
        let markerGroup = leaflet.featureGroup();
        let marker: any = leaflet
          .marker([e.latitude, e.longitude])
          .on("click", () => {
            alert("Marker clicked");
          });
        markerGroup.addLayer(marker);
        this.map.addLayer(markerGroup);
      })
      .on("locationerror", err => {
        alert(err.message);
      });
  }
  locate() {
    this.opacity = 1;

    this.geolocation
      .getCurrentPosition()
      .then(resp => {
        console.log(
          "lat" + resp.coords.latitude + "- long" + resp.coords.longitude
        );
      })
      .catch(error => {
        console.log("Error getting location", error);
      });
  }

  close() {
    this.opacity = 0;
    this.map.remove();
    

  }
  ngOnInit() {}
}
