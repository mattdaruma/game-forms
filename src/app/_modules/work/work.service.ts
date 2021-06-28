import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Field } from 'src/app/_services/api/_interfaces/field';
import { Work } from 'src/app/_services/api/_interfaces/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  public work: BehaviorSubject<Work[]> = new BehaviorSubject<Work[]>([])
  public forms: BehaviorSubject<Form[]> = new BehaviorSubject<Form[]>([])
  public fields: BehaviorSubject<Field[]> = new BehaviorSubject<Field[]>([]) 
  constructor() { }
}
