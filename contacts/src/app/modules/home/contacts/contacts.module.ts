import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { CreateOrEditContactComponent } from './create-or-edit-contact/create-or-edit-contact.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactsComponent, CreateOrEditContactComponent],
  imports: [
    CommonModule,
    FormsModule,
    ContactsRoutingModule
  ]
})
export class ContactsModule { }
