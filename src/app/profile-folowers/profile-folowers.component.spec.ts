import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileFolowersComponent } from './profile-folowers.component';

describe('ProfileFolowersComponent', () => {
  let component: ProfileFolowersComponent;
  let fixture: ComponentFixture<ProfileFolowersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileFolowersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileFolowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
