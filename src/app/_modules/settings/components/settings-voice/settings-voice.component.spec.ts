import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsVoiceComponent } from './settings-voice.component';

describe('SettingsVoiceComponent', () => {
  let component: SettingsVoiceComponent;
  let fixture: ComponentFixture<SettingsVoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsVoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsVoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
