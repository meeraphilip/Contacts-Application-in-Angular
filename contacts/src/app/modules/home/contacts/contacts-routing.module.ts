import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactsComponent } from './contacts.component';
import { CreateOrEditContactComponent } from './create-or-edit-contact/create-or-edit-contact.component';

const routes: Routes = [
  { path: '', component: ContactsComponent},
  { path: 'create', component: CreateOrEditContactComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactsRoutingModule { }
