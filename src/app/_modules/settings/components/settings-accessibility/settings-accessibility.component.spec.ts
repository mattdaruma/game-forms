import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAccessibilityComponent } from './settings-accessibility.component';

describe('SettingsAccessibilityComponent', () => {
  let component: SettingsAccessibilityComponent;
  let fixture: ComponentFixture<SettingsAccessibilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAccessibilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsAccessibilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
