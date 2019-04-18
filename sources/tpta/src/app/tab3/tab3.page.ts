import { Component } from '@angular/core';
import { TabNameService } from './../tab-name.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { Platform } from '@ionic/angular';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    itemToUpload = "assets/icon/favicon.png";

    constructor(private tabName: TabNameService, private camera: Camera, private androidPermissions: AndroidPermissions, private _diagnostic: Diagnostic, private _platform: Platform) {}

    takePhoto(){

        this.checkCameraPermissions().then(permissionOk => {
            if (permissionOk) {

                const options: CameraOptions = {
                    quality: 35,
                    destinationType: this.camera.DestinationType.DATA_URL,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE,
                    sourceType: this.camera.PictureSourceType.CAMERA,
                    allowEdit: true
                };

                this.camera.getPicture(options).then((imageData) => {
                    console.log('PHOTO OK : ', imageData)

                    // passage page avec photo

                    this.itemToUpload = 'data:image/jpeg;base64,' + imageData;


                }, (err) => {
                    // Handle error
                    console.log(err)
                });
            }
        });

    }

    checkCameraPermissions(): Promise<boolean> {
        return new Promise(resolve => {
            if (this.isiOS()) {
                this._diagnostic.getCameraAuthorizationStatus().then(status => {
                    if (status == this._diagnostic.permissionStatus.GRANTED) {
                        resolve(true);
                    }
                    else if (status == this._diagnostic.permissionStatus.DENIED) {
                        this._diagnostic.requestCameraAuthorization().then(authorisation => {
                            resolve(authorisation == this._diagnostic.permissionStatus.GRANTED);
                        }).catch(() => {
                            resolve(false);
                            // si bug, virer tout le else sauf resolve false
                        })
                    }
                    else if (status == this._diagnostic.permissionStatus.NOT_REQUESTED || status.toLowerCase() == 'not_determined') {
                        this._diagnostic.requestCameraAuthorization().then(authorisation => {
                            resolve(authorisation == this._diagnostic.permissionStatus.GRANTED);
                        });
                    }
                });
            }
            else if (this.isAndroid()) {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.CAMERA).then(result => {
                    resolve(result);
                }, err => {
                    resolve(false);
                    console.log(err);
                });
            }
        });
    }


    isAndroid() {
        return this._platform.is('android')
    }

    isiOS() {
        return this._platform.is('ios');
    }

}
