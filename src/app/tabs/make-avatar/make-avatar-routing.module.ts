import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeAvatarPage } from './make-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: MakeAvatarPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MakeAvatarRoutingModule {}
