import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SubCategoryComponent } from './components/sub-category/sub-category.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "subcategory", loadChildren: () => import('./components/sub-category/sub-category.module').then(m => m.SubCategoryModule)},
  {path: "product", loadChildren: () => import('./components/products/products.module').then(m => m.ProductsModule)},
  {path: "user", loadChildren: () => import('./components/user/user.module').then(m => m.UserModule)},
  {path: "", redirectTo: "home", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
