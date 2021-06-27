import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, NewsComponent, ProductsComponent } from './componemts';
const routes: Routes = [{
  path:'',
  redirectTo:'/home',
  pathMatch:'full'
},{
  path:'/home',
  component:HomeComponent
},{
  path:'/news',
  component:NewsComponent
},{
  path:'/products',
  component:ProductsComponent
},{
  path:'**',
  component:HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
