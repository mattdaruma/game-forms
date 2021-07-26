import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, ReplaySubject } from 'rxjs';
import { map, startWith, take } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-work-details',
  templateUrl: './work-details.component.html',
  styleUrls: ['./work-details.component.scss']
})
export class WorkDetailsComponent implements AfterViewInit {
  // workData: Work;
  // formData: GameForm;
  // fieldData: Field[];
  // gameForm: FormGroup;

  // pageSizeOptions: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([1, 5, 10, 50, 100]);
  // pageSize: BehaviorSubject<number> = new BehaviorSubject<number>(5);
  // pagedFields: Field[];
  constructor(
    // private fb: FormBuilder
    // , private route: ActivatedRoute
    // , private api: ApiService
    ) {}
  public lowerType(typeInput: string): string {
    let type = typeInput?.toLowerCase();
    if(type === 'datetime') type += '-local';
    return type;
  }
  public getControl(fieldId: string): FormControl{
    // return this.gameForm.get(fieldId) as FormControl;
    return new FormControl()
  }
  ngAfterViewInit(): void {
    // this.route.params.subscribe(params => {
    // this.api.works.pipe(take(1)).toPromise().then(works => {
    //   for(let work of works){
    //     if(work.id == params['workId']){
    //       this.workData = work;
    //       this.api.forms.pipe(take(1)).toPromise().then(forms => {
    //         for(let find in forms){
    //           let form = forms[find]
    //           if(work.formId == form.id){
    //             this.formData = form;
    //             this.api.fields.pipe(take(1)).toPromise().then(fields => {
    //               let myFields = [] as any[];
    //               let myControls = {} as any;
    //               for(let lind in fields){
    //                 let field = fields[lind];
    //                 if(form.fieldIds.includes(field.id)){
    //                   let validators = [] as Validators[];
    //                   if(this.lowerType(field.type.toString()) == 'email') validators.push(Validators.email)
    //                   if(field.min) validators.push(Validators.min(field.min))
    //                   if(field.minLength) validators.push(Validators.minLength(field.minLength))
    //                   if(field.max) validators.push(Validators.min(field.max))
    //                   if(field.maxLength) validators.push(Validators.maxLength(field.maxLength))
    //                   myControls[field.id] = [this.workData.workData[lind], validators]
    //                   myFields.push(field)
    //                 }
    //               }
    //               this.gameForm = this.fb.group(myControls)
    //               this.fieldData = myFields;
    //               this.pageSize.pipe(take(1)).toPromise().then(psize => {
    //                 this.pagedFields = myFields.slice(0, psize)
    //               })
    //             })
    //             break;
    //           }
    //         }
    //       })
    //       break;
    //     }
    //   }
    // })
  // })
  }
  async pageChange($event: any){
    let { length, pageIndex, pageSize, previousPageIndex } = $event;
    // this.pagedFields = this.fieldData.slice(pageIndex*pageSize, pageIndex*pageSize+pageSize);
    return null
  }
  completeWork(){
    // let valueData = [];
    // for(let field of this.fieldData){
    //   let control = this.gameForm.get(field.id) as FormControl;
    //   valueData.push([field.id, control.value])
    // }
    // console.warn('valuedata', valueData)
    return null
  }
}
