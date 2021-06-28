import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject } from 'rxjs';
import { IdentityService } from '../identity/identity.service';
import { Field } from './_interfaces/field';
import { Queue } from './_interfaces/queue';
import { User } from './_interfaces/user';
import { Work } from './_interfaces/work';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  public connectionStatus: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  public works: BehaviorSubject<Work[]> = new BehaviorSubject<Work[]>([])
  public queues: BehaviorSubject<Queue[]> = new BehaviorSubject<Queue[]>([])
  public forms: BehaviorSubject<Form[]> = new BehaviorSubject<Form[]>([])
  public fields: BehaviorSubject<Field[]> = new BehaviorSubject<Field[]>([])
  public users: BehaviorSubject<User[]> = new BehaviorSubject<User[]>([])
  constructor(
    private apollo: Apollo, 
    private is: IdentityService
    ) {
      this.connectionStatus.subscribe(status => {
        if(status === 0) this.connect();
      })
    }
    private async connect() {
      this.connectionStatus.next(1);
      await this.testConnection().then(good => {
        this.connectionStatus.next(2);
        this.loadData()
      }).catch((err) => {
        this.is.getJwt().then((jwt) => {
          this.testConnection().then(good => {
          this.connectionStatus.next(2);
            this.loadData()
          }).catch(err => {
            this.connectionStatus.next(4);
          })
        }).catch(err => {
          this.connectionStatus.next(3);
        });
      });
    }
  public testConnection() {
    return this.apollo
      .query({
        query: gql`
          {
            myUser {
              display
              roles
            }
          }
        `,
      })
      .toPromise()
      .then((userData) => {
        console.warn('user', userData);
        return true;
      });
  }
  private async loadData(){
    this.getQueues().subscribe(newVal => {
      let myVal = newVal as any;
      let queues = myVal.data.Queues as Queue[]
      console.warn('queues', queues)
      this.queues.next(queues);
    })
    this.getWork().subscribe(newVal => {
      let myVal = newVal as any;
      let works = myVal.data.Works as Work[]
      console.warn('work', works)
      this.works.next(works);
    })
    this.getForms().subscribe(newVal => {
      let myVal = newVal as any;
      let forms = myVal.data.Forms as Form[]
      console.warn('forms', forms);
      this.forms.next(forms)
    })
    this.getFields().subscribe(newVal => {
      let myVal = newVal as any;
      let fields = myVal.data.Fields as Field[]
      console.warn('fields', fields);
      this.fields.next(fields)
    })
    this.getUsers().subscribe(newVal => {
      let myVal = newVal as any;
      let users = myVal.data.Users as Field[]
      console.warn('users', users);
      this.users.next(users)
    })
  }
  private getQueues() {
    return this.apollo.watchQuery({
      query: gql`
        {
          Queues {
            id
            name
            description
            icon
            color
            roles
            workIds
          }
        }
      `,
    }).valueChanges;
  }
  private getWork() {
    return this.apollo.watchQuery({
      query: gql`
        {
          Works {
            id,
            queueId,
            formId,
            workData,
            listData,
            auditLogs
          }
        }
      `,
    }).valueChanges;
  }
  private getForms(){
    return this.apollo.watchQuery({
      query: gql`
        {
          Forms{
            id,
            name,
            description,
            color,
            icon,
            fieldIds,
            mutation
          }
        }
      `
    }).valueChanges
  }
  private getFields(){
    return this.apollo.watchQuery({
      query: gql`
        {
          Fields{
            id,
            name,
            type,
            color,
            icon,
            hint,
            required,
            disabled
          }
        }
      `
    }).valueChanges
  }
  private getUsers(){
    return this.apollo.watchQuery({
      query: gql`
        {
          Users{
            id,
            display,
            color,
            icon
          }
        }
      `
    }).valueChanges
  }
  public triggerMutation() {
    // let vars = {
    //   newForm: {
    //     queueId: 'blah',
    //     name: 'firstform',
    //     description: 'firstformdesc',
    //     fields: [],
    //     submitQuery: null,
    //   },
    // };
    // return this.apollo
    //   .mutate({
    //     mutation: gql`
    //       mutation ($newForm: String) {
    //         createForm(newForm: $newForm)
    //       }
    //     `,
    //     variables: {newForm: {tester: 'blah'}},
    //   })
    //   .toPromise()
    //   .then((res) => {
    //     console.warn('mutate res', res);
    //   });
  }
}
