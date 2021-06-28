import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPadComponent } from './settings-pad.component';

describe('SettingsPadComponent', () => {
  let component: SettingsPadComponent;
  let fixture: ComponentFixture<SettingsPadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsPadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
