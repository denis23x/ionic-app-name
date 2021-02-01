import { Component, OnInit } from '@angular/core';
import { AvatarService, Avatar } from '../../core/services/avatar.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  avatar$: Observable<Avatar>;

  constructor(private avatarService: AvatarService) {}

  ngOnInit(): void {
    this.avatar$ = this.avatarService.currentAvatar;
  }
}
