import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { ToolbarUserGQL } from 'src/app/generated-types';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  constructor(myUserQuery: ToolbarUserGQL) { 
    myUserQuery.fetch().pipe(map(result => result.data)).subscribe(myUser => {
      console.warn('toolbar user', myUser)
    })
  }
}
