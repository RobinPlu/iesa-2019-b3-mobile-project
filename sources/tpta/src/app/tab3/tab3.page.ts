import { Component } from "@angular/core";
import { TabNameService } from "./../tab-name.service";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";
import { AndroidPermissions } from "@ionic-native/android-permissions/ngx";
import { Platform } from "@ionic/angular";
import { Diagnostic } from "@ionic-native/diagnostic/ngx";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"]
})
export class Tab3Page {
  itemToUpload = "assets/icon/favicon.png";

  constructor(
    private tabName: TabNameService,
    private camera: Camera,
    private androidPermissions: AndroidPermissions,
    private _diagnostic: Diagnostic,
    private _platform: Platform
  ) {}

  takePhoto() {
    console.log("takePhoto");

    if (this.isiOS()) {
      this._diagnostic.getCameraAuthorizationStatus().then(status => {
        if (status == this._diagnostic.permissionStatus.GRANTED) {
          const options: CameraOptions = {
            quality: 35,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: this.camera.PictureSourceType.CAMERA,
            allowEdit: true
          };

          this.camera.getPicture(options).then(
            imageData => {
              console.log("PHOTO OK : ", imageData);

              this.itemToUpload = "data:image/jpeg;base64," + imageData;
            },
            err => {
              // Handle error
              console.log("err", err);
            }
          );
        } else if (
          status == this._diagnostic.permissionStatus.NOT_REQUESTED ||
          status.toLowerCase() == "not_determined"
        ) {
          this._diagnostic.requestCameraAuthorization().then(authorisation => {
            const options: CameraOptions = {
              quality: 35,
              destinationType: this.camera.DestinationType.DATA_URL,
              encodingType: this.camera.EncodingType.JPEG,
              mediaType: this.camera.MediaType.PICTURE,
              sourceType: this.camera.PictureSourceType.CAMERA,
              allowEdit: true
            };

            this.camera.getPicture(options).then(
              imageData => {
                console.log("PHOTO OK : ", imageData);

                this.itemToUpload = "data:image/jpeg;base64," + imageData;
              },
              err => {
                // Handle error
                console.log("err", err);
              }
            );
          });
        }
      });
    } else if (this.isAndroid()) {
      var that = this;
      console.log("dans is android");
      // this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
      console.log("dans req perm");
      const options: CameraOptions = {
        quality: 35,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        // sourceType: this.camera.PictureSourceType.CAMERA,
        allowEdit: false
      };
      console.log("dans req perm", 2, options);

      this.camera.getPicture(options).then(
        imageData => {
          console.log("PHOTO OK : ", imageData);

          this.itemToUpload = "data:image/jpeg;base64," + imageData;
        },
        err => {
          // Handle error
          console.log("err", err);
        }
      );
      // }, err => {
      //     console.log(err);
      // });
    } else {
      console.log("pas ios ni android");
    }
  }

  isAndroid() {
    return this._platform.is("android");
  }

  isiOS() {
    return this._platform.is("ios");
  }
  xp: number = 0;
  level: number = 1;
  updateLevel() {
    if (this.xp > 40) {
      this.level += Math.floor(this.xp / 40);
      this.xp = this.xp % 40;
    }
  }
  getxp() {
    this.xp += 10;
    this.updateLevel();
  }
}
