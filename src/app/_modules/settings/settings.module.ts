import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingsPadComponent } from './components/settings-pad/settings-pad.component';
import { SettingsVoiceComponent } from './components/settings-voice/settings-voice.component';
import { SettingsThemeComponent } from './components/settings-theme/settings-theme.component';
import { SettingsAccessibilityComponent } from './components/settings-accessibility/settings-accessibility.component';



@NgModule({
  declarations: [
    SettingsPadComponent,
    SettingsVoiceComponent,
    SettingsThemeComponent,
    SettingsAccessibilityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '**', component: SettingsPadComponent }])
  ]
})
export class SettingsModule { }
