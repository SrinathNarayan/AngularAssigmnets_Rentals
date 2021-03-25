import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsComponent } from './component/account-details/account-details.component';
import { BikesComponent } from './component/bikes/bikes.component';
import { CustompipesComponent } from './component/custompipes/custompipes.component';
import { DetailsComponent } from './component/details/details.component';
import { FraudulentDetailsComponent } from './component/fraudulent-details/fraudulent-details.component';
import { HistoryComponent } from './component/history/history.component';
import { OwnpipesComponent } from './component/ownpipes/ownpipes.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { RequirmentsComponent } from './component/requirments/requirments.component';
import { SearchComponent } from './component/search/search.component';
import { TrackComponent } from './component/track/track.component';
import { UpdatehistoryComponent } from './component/updatehistory/updatehistory.component';



import { HomeComponent } from './Home';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'History', component: HistoryComponent ,

  children : [
    {path: 'details/:BikeID', component: DetailsComponent },
    {path: '', redirectTo: 'History', pathMatch : 'full' }
  ]},
  { path: 'requirement',component: RequirmentsComponent },
  { path: 'Pipes',component: OwnpipesComponent },
  { path: 'CustomPipes',component: CustompipesComponent },
  { path: 'Bike', component: BikesComponent },
  { path: 'Account', component: AccountDetailsComponent },
  { path: 'fraud', component: FraudulentDetailsComponent },
  { path: 'track', component: TrackComponent },
  { path: 'search', component: SearchComponent },
  
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
