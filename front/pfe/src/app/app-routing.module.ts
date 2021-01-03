import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'type', component: ListComponent},
  {path: 'type/:id', component: ListComponent},
  {path: 'add', component: AddComponent},
  {path: 'search/:search', component: SearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
