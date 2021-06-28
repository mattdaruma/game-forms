import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminFormsComponent } from './_components/admin-forms/admin-forms.component';
import { AdminWorksComponent } from './_components/admin-works/admin-works.component';



@NgModule({
  declarations: [
    AdminFormsComponent,
    AdminWorksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '**', component: AdminWorksComponent }])
  ]
})
export class AdminModule { }
