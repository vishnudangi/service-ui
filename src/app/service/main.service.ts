import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class MainService {
    headers:any ='';
  
  constructor(private httpClient: HttpClient) { 
    this.headers= new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');
  }
  public getNews(){
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }

  public getMockupList(){
    return this.httpClient.get(`${environment.baseUrl}/mockingAppController/getMockApiDetail`);
  }

  public getMockupApiType(){
    return this.httpClient.get(`${environment.baseUrl}/mockingAppController/getMockApiTypes`);
  }

  public getAllServiceType(){
    return this.httpClient.get(`${environment.baseUrl}/serviceController/getAllServiceInfo`);
  }

  public saveMockup(requestBody, param){
    var url = '';
    if(param.mockApiType === 'ONLY_REQUEST_BODY' || param.mockApiType === 'WITH_QUERY_PARAM_AND_REQUEST_BODY'){
      url = `${environment.baseUrl}/mockingAppController/createMockApi?typeOfApi=${param.typeOfApi}&&mockApiType=${param.mockApiType}&apiName=${param.apiName}&apiPath=${param.apiPath}&expectedResponse=${param.expectedResponse}&responseCode=${param.responseCode}&enableProxy=${param.enableProxy}&serviceId=${param.serviceId}&keyword=${param.keyword}`;
    } else {
      url = `${environment.baseUrl}/mockingAppController/createMockApi?typeOfApi=${param.typeOfApi}&&mockApiType=${param.mockApiType}&apiName=${param.apiName}&apiPath=${param.apiPath}&expectedResponse=${param.expectedResponse}&responseCode=${param.responseCode}&enableProxy=${param.enableProxy}&serviceId=${param.serviceId}`;
    }
    return this.httpClient.post(url , requestBody);
  }

  public getWelcomeMessage(){
    return this.httpClient.get(`${environment.baseUrl}/mockingAppController/serverDetails`);
  }

  public getServiceList(){
    return this.httpClient.get(`${environment.baseUrl}/serviceController/getAllServiceInfo`);
  }

  public saveService(requestBody, param){
    return this.httpClient.post(`${environment.baseUrl}/serviceController/saveService?name=${param.name}&&port=${param.port}&pingsPerMinute=${param.pingsPerMinute}&active=${param.active}&host=${param.host}` , requestBody);
  }

  public getServerDetail(){
    return this.httpClient.get(`${environment.baseUrl}/mockingAppController/serverDetails`);
  }

  public getResponseTemplateInfo(){
    return this.httpClient.get(`${environment.baseUrl}/responseTemplateController/getResponseTemplateInfo`);
  }
}