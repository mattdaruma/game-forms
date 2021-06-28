import { Component, OnInit, ViewChild } from '@angular/core';
import { IdentityService } from './_services/identity/identity.service';
import { ApiService } from './_services/api/api.service';
import { WorkService } from './_modules/work/work.service';
import { QueueService } from './_modules/queue/queue.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-forms';
  constructor(
    private api: ApiService, 
    private ws: WorkService, 
    private qs: QueueService
    ){
    this.api.queues.subscribe(queues => {
      this.qs.queues.next(queues);
    })
    this.api.works.subscribe(works => {
      this.ws.work.next(works);
      this.qs.work.next(works);
    })
    this.api.forms.subscribe(forms => {
      this.ws.forms.next(forms);
    })
    this.api.fields.subscribe(fields => {
      this.ws.fields.next(fields);
    })
  }
}