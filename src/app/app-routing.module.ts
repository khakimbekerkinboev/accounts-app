import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  { path: '', component: SummaryComponent },
  { path: 'navigator', component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
