import { Component } from '@angular/core';
import { Plugins, CameraResultType } from '@capacitor/core';

const { Camera } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  async takePicture() {
    return await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Uri
    });
  }

  clickCamera() {
    this.takePicture().then(r => {
      console.log(r);
    });
  }
}
