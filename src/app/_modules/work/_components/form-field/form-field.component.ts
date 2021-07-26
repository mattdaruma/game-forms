import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit{
  // @Input() fieldData: Field;
  @Input() valueData: string[];
  @Input() listData: string[][];
  @Input() myControl: FormControl;
  filteredListData: string[][];
  displayOptionValue(option: string[]){
    return option && option[1] ? option[1] : '';
  }
  constructor() { 
  }
  ngOnInit(){
    if(this.listData && this.listData.length > 0) this.myControl.valueChanges.subscribe(val => {
      if(typeof val !== 'string') return;
      let lowerval = val?.toLowerCase()
      let matchingOptions = [] as string[][]
      for(let option of this.listData){
        if(option[0] && option[0]?.toLowerCase().includes(lowerval)) matchingOptions.push(option)
        else if(option[1]?.toLowerCase().includes(lowerval)) matchingOptions.push(option)
      }
      this.filteredListData = matchingOptions.slice(0, 100);
    })
  }
  public lowerType(typeInput: string): string {
    let type = typeInput?.toLowerCase();
    if(type === 'datetime') type += '-local';
    return type;
  }
  getDefaultIcon(inputType: string){
    switch(this.lowerType(inputType)){
      case 'email':
        return 'email'
      case 'tel':
        return 'phone'
      case 'password':
        return 'password'
      case 'url':
        return 'link'
      case 'color':
        return 'color_lens'
      case 'text':
        return 'text_fields'
      case 'week':
        return 'calendar_view_week'
      case 'month':
        return 'calendar_view_month'
      case 'date':
        return 'calendar_today'
      case 'datetime-local':
        return 'calendar_view_day'
      case 'time':
        return 'timer'
      case 'number':
        return 'calculate'
      default: 
        return null
    }
  }
}
