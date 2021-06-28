import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Queue } from 'src/app/_services/api/_interfaces/queue';
import { Work } from 'src/app/_services/api/_interfaces/work';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  public work: BehaviorSubject<Work[]> = new BehaviorSubject<Work[]>([])
  public queues: BehaviorSubject<Queue[]> = new BehaviorSubject<Queue[]>([])
  constructor() {
   }
}
