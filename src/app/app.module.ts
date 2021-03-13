import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './Home';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './component/grid/grid.component';
import { HistoryComponent } from './component/history/history.component';
import { PricingComponent } from './component/pricing/pricing.component';
import { BikesComponent } from './component/bikes/bikes.component';
import { RequirmentsComponent } from './component/requirments/requirments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    HistoryComponent,
    GridComponent,
    BikesComponent,
    RequirmentsComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
