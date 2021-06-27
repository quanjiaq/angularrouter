import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent, NewsComponent, ProductsComponent, ProductsContentComponent } from './componemts';
const routes: Routes = [{
  path:'home',
  component:HomeComponent
},{
  path:'news',
  component:NewsComponent
},{
  path:'products',
  component:ProductsComponent
},{
  path:'productsContent',
  component:ProductsContentComponent
},{
  path:'',
  redirectTo:'home',
  pathMatch:'full'
},{
  path:'**',
  component:HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
