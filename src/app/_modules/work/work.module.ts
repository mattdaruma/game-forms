import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkListComponent } from './_components/work-list/work-list.component';
import { WorkDetailsComponent } from './_components/work-details/work-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [WorkListComponent, WorkDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    RouterModule.forChild([
      { path: 'all', component: WorkListComponent },
      { path: ':workId', component: WorkDetailsComponent },
      { path: '**', component: WorkDetailsComponent },
    ]),
  ],
})
export class WorkModule {}
