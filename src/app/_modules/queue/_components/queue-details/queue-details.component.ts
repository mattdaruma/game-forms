import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Queue } from 'src/app/_services/api/_interfaces/queue';
import { Work } from 'src/app/_services/api/_interfaces/work';
import { QueueService } from '../../queue.service';

@Component({
  selector: 'app-queue-details',
  templateUrl: './queue-details.component.html',
  styleUrls: ['./queue-details.component.scss']
})
export class QueueDetailsComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  columns: string[] = ['rownum', 'queue', 'form', 'activeDate'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource<any>([]);
  pageSizeOptions: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([1, 5, 10, 50, 100]);
  pageSize: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  page: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  queue: Queue;
  constructor(public qs: QueueService, private route: ActivatedRoute) { 
    route.params.subscribe(params => {
      this.qs.queues.subscribe(queues => {
        for(let ind in queues){
          let queue = queues[ind]
          if(queue.id === params['queueId']){
            this.queue = queue;
            this.qs.work.subscribe(works => {
              let myWork = []
              for(let wind in works){
                let work = works[wind]
                if(queue.workIds.includes(work.id)){
                  let newWork = Object.assign({}, work) as Work;
                  newWork.queueName = queue.name;
                  console.warn('nework', newWork)
                  myWork.push(newWork);
                  // for(let blind = 1; blind < 10; blind++){
                  //   let workClone = Object.assign({}, work) as Work;
                  //   workClone.queueName = queue.name;
                  //   workClone.queueName += blind;
                  //   myWork.push(workClone);
                  // }
                }
              }
              this.dataSource.data = myWork;
            })
          }
        }
      })
    })
  }
  ngAfterViewInit(){
    this.dataSource.paginator = this.paginator;
  }
  pageChange($event: any){
    console.log('page change', $event)
  }
}
