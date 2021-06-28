import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { QueueListComponent } from './_components/queue-list/queue-list.component';
import { QueueDetailsComponent } from './_components/queue-details/queue-details.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    QueueListComponent,
    QueueDetailsComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatIconModule,
    RouterModule.forChild([{ path: ':queueId', component: QueueDetailsComponent },{ path: '**', component: QueueListComponent }])
  ]
})
export class QueueModule { }
