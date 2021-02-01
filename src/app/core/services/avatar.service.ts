import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

export interface Avatar {
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class AvatarService {
  private currentAvatarSubject = new BehaviorSubject<Avatar>({} as Avatar);
  public currentAvatar = this.currentAvatarSubject.asObservable().pipe(distinctUntilChanged());

  constructor() {}

  setAvatar(avatar: Avatar) {
    this.currentAvatarSubject.next(avatar);
  }
}
