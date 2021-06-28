import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ErrorListComponent } from './_components/error-list/error-list.component';
import { ErrorSnackbarComponent } from './_components/error-snackbar/error-snackbar.component';
import { ErrorDialogComponent } from './_components/error-dialog/error-dialog.component';



@NgModule({
  declarations: [
    ErrorListComponent,
    ErrorSnackbarComponent,
    ErrorDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '**', component: ErrorListComponent }])
  ]
})
export class ErrorModule { }
