import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChatPageComponent } from './_components/chat-page/chat-page.component';
import { ChatDialogComponent } from './_components/chat-dialog/chat-dialog.component';



@NgModule({
  declarations: [
    ChatPageComponent,
    ChatDialogComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '**', component: ChatPageComponent }])
  ]
})
export class ChatModule { }
