import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetAboutComponent } from './vet-about/vet-about.component';
import { VetProductComponent } from './vet-product/vet-product.component';

//ACA VAN LOS RUTEOS!!
const routes: Routes = [
  {
    path: '', 
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: 'products', 
    component: VetProductComponent
  },
  {
    path: 'about', 
    component: VetAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
