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
import { UpdatehistoryComponent } from './component/updatehistory/updatehistory.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { DetailsComponent } from './component/details/details.component';
import { MatTableDataSource } from '@angular/material/table';
import { DobPipe } from './component/Pipes/dob.pipe';
import { OwnpipesComponent } from './component/ownpipes/ownpipes.component';
import { CustompipesComponent } from './component/custompipes/custompipes.component';
import { AvailbalencePipe } from './component/Pipes/availbalence.pipe';
import { CardNumberPipe } from './component/Pipes/card-number.pipe';
import { AccountDetailsComponent } from './component/account-details/account-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FraudulentDetailsComponent } from './component/fraudulent-details/fraudulent-details.component';
import { BalancePipe } from './component/Pipes/balance.pipe';
import { DollorPipe } from './component/Pipes/dollor.pipe';
import { TrackComponent } from './component/track/track.component';
import { SearchComponent } from './component/search/search.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PricingComponent,
    HistoryComponent,
    GridComponent,
    BikesComponent,
    RequirmentsComponent,
    UpdatehistoryComponent,
    DetailsComponent,
    OwnpipesComponent,
    DobPipe,
    CustompipesComponent,
    AvailbalencePipe,
    CardNumberPipe,
    AccountDetailsComponent,
    FraudulentDetailsComponent,
    BalancePipe,
    DollorPipe,
    TrackComponent,
    SearchComponent,



  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
  
   


  ],
  providers: [
    { provide: MAT_RIPPLE_GLOBAL_OPTIONS, useValue: { float: 'always' } }
  ],
  entryComponents: [UpdatehistoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
