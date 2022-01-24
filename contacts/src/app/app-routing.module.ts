import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo:'contacts', pathMatch: 'full'},
  { path: 'contacts', loadChildren: () => import('./Modules/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: '**', redirectTo: 'contacts'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
