import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-queue-details',
  templateUrl: './queue-details.component.html',
  styleUrls: ['./queue-details.component.scss']
})
export class QueueDetailsComponent implements AfterViewInit {
  constructor(){}
  @ViewChild(MatPaginator) paginator: MatPaginator;
  columns: string[] = ['rownum', 'queue', 'form', 'began', 'locked'];
  // queueWork: BehaviorSubject<Work[]> = new BehaviorSubject<Work[]>([]);
  // dataSource: MatTableDataSource<Work> = new MatTableDataSource<Work>([]);
  // pageSizeOptions: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([1, 5, 10, 50, 100]);
  // pageSize: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  // queue: Queue;
  // constructor(public api: ApiService, private route: ActivatedRoute) { 
  //   this.route.params.subscribe(params => {
  //     this.api.queues.subscribe(queues => {
  //       for(let ind in queues){
  //         let queue = queues[ind]
  //         if(queue.id === params['queueId']){
  //           this.queue = queue;
  //           this.api.works.subscribe(works => {
  //             let myWork = []
  //             for(let wind in works){
  //               let work = works[wind]
  //               if(queue.workIds.includes(work.id)){
  //                 let newWork = Object.assign({}, work) as Work;
  //                 newWork.queueName = queue.name;
  //                 myWork.push(newWork);
  //                 for(let blind = 1; blind < 10; blind++){
  //                   let workClone = Object.assign({}, work) as Work;
  //                   workClone.queueName = queue.name;
  //                   workClone.queueName += blind;
  //                   myWork.push(workClone);
  //                 }
  //               }
  //             }
  //             this.queueWork.next(myWork);
  //           })
  //         }
  //       }
  //     })
  //   })
  // }
  ngAfterViewInit(){
    // this.dataSource.paginator = this.paginator;
    // this.queueWork.subscribe(mywork => {
    //   this.dataSource.data = mywork;
    // })
  }
}
