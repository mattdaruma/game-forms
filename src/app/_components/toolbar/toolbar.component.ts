import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/_services/api/api.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

  constructor(public api: ApiService) { }

}
