import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './component/bikes/bikes.component';
import { HistoryComponent } from './component/history/history.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { RequirmentsComponent } from './component/requirments/requirments.component';



import { HomeComponent } from './Home';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'History', component: HistoryComponent },
  { path: 'requirement', component: RequirmentsComponent },
  { path: 'Bike', component: BikesComponent },
  

  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  AppRoutingModule = RouterModule.forRoot(routes);
 }
