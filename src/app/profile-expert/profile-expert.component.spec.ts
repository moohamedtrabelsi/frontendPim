import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileExpertComponent } from './profile-expert.component';

describe('ProfileExpertComponent', () => {
  let component: ProfileExpertComponent;
  let fixture: ComponentFixture<ProfileExpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileExpertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
