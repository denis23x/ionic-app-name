import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { MakeAvatarPage } from './make-avatar.page';

describe('Tab1Page', () => {
  let component: MakeAvatarPage;
  let fixture: ComponentFixture<MakeAvatarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MakeAvatarPage],
      imports: [IonicModule.forRoot(), ExploreContainerComponentModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MakeAvatarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
