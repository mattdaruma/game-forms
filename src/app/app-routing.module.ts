import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';

const routes: Routes = [
  {path: 'admin', loadChildren: () => import('./_modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'a', loadChildren: () => import('./_modules/admin/admin.module').then(m => m.AdminModule)},
  {path: 'settings', loadChildren: () => import('./_modules/settings/settings.module').then(m => m.SettingsModule)},
  {path: 's', loadChildren: () => import('./_modules/settings/settings.module').then(m => m.SettingsModule)},
  {path: 'errors', loadChildren: () => import('./_modules/error/error.module').then(m => m.ErrorModule)},
  {path: 'e', loadChildren: () => import('./_modules/error/error.module').then(m => m.ErrorModule)},
  {path: 'chat', loadChildren: () => import('./_modules/chat/chat.module').then(m => m.ChatModule)},
  {path: 'c', loadChildren: () => import('./_modules/chat/chat.module').then(m => m.ChatModule)},
  {path: 'work', loadChildren: () => import('./_modules/work/work.module').then(m => m.WorkModule)},
  {path: 'w', loadChildren: () => import('./_modules/work/work.module').then(m => m.WorkModule)},
  {path: 'queue', loadChildren: () => import('./_modules/queue/queue.module').then(m => m.QueueModule)},
  {path: 'q', loadChildren: () => import('./_modules/queue/queue.module').then(m => m.QueueModule)},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
