import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss']
})
export class QueueListComponent implements AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  columns: string[] = ['rownum', 'name', 'work'];
  pageSizeOptions: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([1, 5, 10, 50, 100]);
  pageSize: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  // dataSource: MatTableDataSource<Queue> = new MatTableDataSource<Queue>([]);
  constructor() {
  }
  ngAfterViewInit(){
    // this.dataSource.paginator = this.paginator;
    // this.api.queues.subscribe(newQueues => {
    //   console.log('newqueues', newQueues)
    //   this.dataSource.data = newQueues;
    // }) 
  }
}
