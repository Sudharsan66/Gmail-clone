import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailWrapperComponent } from './email-wrapper/email-wrapper.component';
import { SingleMailComponent } from './single-mail/single-mail.component';

const routes: Routes = [
  { path: "", component: EmailWrapperComponent },
  { path: ":id", component: SingleMailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
