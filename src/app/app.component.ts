import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { MyUserGQL } from './generated-types'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-forms';
  constructor(){
  }
}