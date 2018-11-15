import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ContentComponent} from './content/content.component';

const routes: Routes = [
  { path: '', redirectTo: '/content', pathMatch: 'full' },
  {path :'about',component : AboutComponent},
  {path :'contact',component : ContactComponent},
  { path: 'content', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
