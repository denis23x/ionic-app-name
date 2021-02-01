import {Component, OnInit, ViewChild} from '@angular/core';
import { Atoms } from '../../../../assets/avatars/atoms';
import { toSvg } from 'html-to-image';
import { ToastController } from '@ionic/angular';
import { AvatarService } from '../../../core/services/avatar.service';

export interface AvatarMap {
  ['head']: number;
  ['face']: number;
  ['facial-hair']: number;
  ['accessories']: number;
  ['body']: number;
}

@Component({
  selector: 'app-avatar-builder',
  templateUrl: './avatar-builder.component.html',
  styleUrls: ['./avatar-builder.component.scss'],
})
export class AvatarBuilderComponent implements OnInit {
  @ViewChild('avatar') avatar;

  atoms: object = {};
  avatarMap: AvatarMap;

  constructor(
      private toastController: ToastController,
      private avatarService: AvatarService
  ) { }

  ngOnInit() {
    Atoms.contents.forEach(a => {
      this.atoms[a.name] = a.contents.map(i => ({
        name: i.name,
        url: `assets/avatars/atoms/${a.name}/${i.name}`
      }));
    });

    this.avatarMap = {
      ['head']: this.getRandomInt(this.atoms['head'].length),
      ['face']: this.getRandomInt(this.atoms['face'].length),
      ['facial-hair']: this.getRandomInt(this.atoms['facial-hair'].length),
      ['accessories']: this.getRandomInt(this.atoms['accessories'].length),
      ['body']: this.getRandomInt(this.atoms['body'].length)
    };
  }

  onChangeRanges(event: CustomEvent, atom: string): void {
    this.avatarMap[atom] = event.detail.value;
  }

  async onSubmit(event: MouseEvent): Promise<void> {
    const toast = await this.toastController.create({
      color: 'primary',
      message: 'Yours avatar has been created!',
      position: 'top',
      duration: 2000
    });

    toSvg(this.avatar.nativeElement).then((dataUrl) => {
      this.avatarService.setAvatar({ avatar: dataUrl });
      toast.present();
    });
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
