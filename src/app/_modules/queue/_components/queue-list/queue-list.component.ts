import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Queue } from 'src/app/_services/api/_interfaces/queue';
import { QueueService } from '../../queue.service';

@Component({
  selector: 'app-queue-list',
  templateUrl: './queue-list.component.html',
  styleUrls: ['./queue-list.component.scss']
})
export class QueueListComponent implements OnInit {
  columns: string[] = ['rownum', 'name', 'work'];
  dataSource: MatTableDataSource<Queue> = new MatTableDataSource<Queue>([]);
  constructor(public qs: QueueService) { }

  ngOnInit(): void {
    this.qs.queues.subscribe(newQueues => {
      this.dataSource.data = newQueues;
    })
  }

}
