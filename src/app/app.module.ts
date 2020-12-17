import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MockupListingComponent } from './component/mockup-listing/mockup-listing.component';
import { CreateMockupComponent } from './component/create-mockup/create-mockup.component';
import { ServiceListingComponent } from './component/service-listing/service-listing.component';
import { CreateServiceComponent } from './component/create-service/create-service.component';
import { CreateKafkaComponent } from './component/create-kafka/create-kafka.component';
import { KafkaListingComponent } from './component/kafka-listing/kafka-listing.component';
import { DialogComponent } from './component/dialog/dialog.component';
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ResponseHelperComponent } from './component/response-helper/response-helper.component';
import { ServerDetailComponent } from './component/server-detail/server-detail.component';
import { ServiceDialogComponent } from './component/service-dialog/service-dialog.component';
//import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MockupListingComponent,
    CreateMockupComponent,
    ServiceListingComponent,
    CreateServiceComponent,
    CreateKafkaComponent,
    KafkaListingComponent,
    ResponseHelperComponent,
    ServerDetailComponent,
    ServiceDialogComponent
  ],
  entryComponents: [
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
