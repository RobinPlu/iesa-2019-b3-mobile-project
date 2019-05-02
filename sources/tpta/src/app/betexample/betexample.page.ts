import { Component, OnInit } from "@angular/core";
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
  selector: "app-betexample",
  templateUrl: "./betexample.page.html",
  styleUrls: ["./betexample.page.scss"]
})
export class BetexamplePage implements OnInit {
  mediaFiles = [];

  constructor(
    private mediaCapture: MediaCapture,
    private storage: Storage,
    private file: File,
    private media: Media
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

  ngOnInit() {}
}
