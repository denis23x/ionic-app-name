import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MakeAvatarPage } from './make-avatar.page';
import { AvatarBuilderModule } from './avatar-builder/avatar-builder.module';
import { MakeAvatarRoutingModule } from './make-avatar-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AvatarBuilderModule,
    MakeAvatarRoutingModule
  ],
  declarations: [MakeAvatarPage]
})
export class MakeAvatarModule {}
