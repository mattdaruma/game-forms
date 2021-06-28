import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Work } from 'src/app/_services/api/_interfaces/work';
import { WorkService } from '../../work.service';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements AfterViewInit {
  public work: BehaviorSubject<Work | null> = new BehaviorSubject<Work | null>(null);
  constructor(private route: ActivatedRoute, private ws: WorkService) {
    this.route.params.subscribe(params => {
      this.ws.work.subscribe(works => {
        for(let work of works){
          if(work.id == params['workId']){
            this.work.next(work);
            break;
          }
        }
      })
    })
  }
  ngAfterViewInit(): void {
  }
}
