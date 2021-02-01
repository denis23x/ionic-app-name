import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarBuilderComponent } from './avatar-builder.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [AvatarBuilderComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [AvatarBuilderComponent]
})
export class AvatarBuilderModule { }
