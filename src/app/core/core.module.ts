import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarService } from './services/avatar.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AvatarService
  ],
  declarations: []
})
export class CoreModule {}
