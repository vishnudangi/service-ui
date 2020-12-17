import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MockupListingComponent } from './component/mockup-listing/mockup-listing.component';
import { CreateMockupComponent } from './component/create-mockup/create-mockup.component';
import { ServiceListingComponent } from './component/service-listing/service-listing.component';
import { CreateServiceComponent } from './component/create-service/create-service.component';
import { CreateKafkaComponent } from './component/create-kafka/create-kafka.component';
import { KafkaListingComponent } from './component/kafka-listing/kafka-listing.component';
import { ResponseHelperComponent } from './component/response-helper/response-helper.component';
import { ServerDetailComponent } from './component/server-detail/server-detail.component';




const routes: Routes = [
  {
    path: '', redirectTo: '/mockup-list', pathMatch: 'full'
 },
 
  {
    path: 'mockup-list',
    component: MockupListingComponent
 },
 {
  path: 'create-mockup',
  component: CreateMockupComponent
},
 {
  path: 'service-list',
  component: ServiceListingComponent
},
 {
  path: 'create-service',
  component: CreateServiceComponent
},
{
  path: 'kafka-list',
  component: KafkaListingComponent
},
 {
  path: 'create-kafka',
  component: CreateKafkaComponent
},
{
  path: 'response-helper',
  component: ResponseHelperComponent
},
{
  path: 'server-detail',
  component: ServerDetailComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
