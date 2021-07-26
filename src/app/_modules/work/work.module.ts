import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorkListComponent } from './_components/work-list/work-list.component';
import { WorkDetailsComponent } from './_components/work-details/work-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormFieldComponent } from './_components/form-field/form-field.component';

@NgModule({
  declarations: [WorkListComponent, WorkDetailsComponent, FormFieldComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatIconModule,
    MatRippleModule,
    MatButtonModule,
    MatAutocompleteModule,
    RouterModule.forChild([
      { path: 'all', component: WorkListComponent },
      { path: ':workId', component: WorkDetailsComponent },
      { path: '**', component: WorkDetailsComponent },
    ]),
  ],
})
export class WorkModule {}
