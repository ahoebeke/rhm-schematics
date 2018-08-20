import {Injectable} from '@angular/core';
import {ApidataService} from '../system-providers/apidata.service';
import {ApiEndpointsService} from '../system-providers/api-endpoints.service';
import {Frontend<%= classify(name) %>Interface, <%= classify(name) %>DataAdaptor} from '../data-adaptors/<%= dasherize(name) %>.data-adaptor';
import {Observable} from 'rxjs';
import {classify} from "../../../../node_modules/@angular-devkit/core/src/utils/strings";


@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>sService {

  <%= camelize(name) %>s: Array<Frontend<%= classify(name) %>Interface> = [];


  constructor(
    private api: ApidataService,
    private endpoint: ApiEndpointsService,
    private <%= camelize(name) %>DataAdaptor: <%= classify(name) %>DataAdaptor
) {
    console.log('----------- Creating <%= classify(name) %>sService instance. This message should only be seen once! -----------');
  }

  /**
   * To use this in a component, create a subscription.

   <%= camelize(name) %>Subscription: Subscription;

   constructor(public <%= camelize(name) %>DataProvider: <%= classify(name) %>DataProvider) {
     this.<%= camelize(name) %>Subscription = this.<%= camelize(name) %>DataProvider
       .get<%= classify(name) %>s()
       .subscribe((output: Array<Frontend<%= classify(name) %>Interface>) => {
          this.<%= camelize(name) %>s = output;
          console.log('<%= classify(name) %>LandingComponent: updating <%= camelize(name) %>s: ', this.<%= camelize(name) %>s);
       });
   */
  get<%= classify(name) %>s(forceRefresh = false): Observable<Array<Frontend<%= classify(name) %>Interface>> {
    if (!forceRefresh && this.<%= camelize(name) %>s.length > 0) {
    // Already have the data.
    // Add logic to refresh the data under certain conditions
    return;
  }

  const endpoint = this.endpoint.get<%= classify(name) %>s; // TODO create endpoint
  const params = `?`;

  this.api
    .apiGet(
      endpoint
      + params
    )
    .map((data: any) => {
      let formattedData = [];

      console.log('get<%= classify(name) %>s(): data: ', data);

      for (let i = 0; i < data.length; i++) {
        const <%= camelize(name) %> = this.<%= camelize(name) %>DataAdaptor.getFrontendObject(data[i]);
        formattedData.push(
          <%= camelize(name) %>
        );

        // TODO Set current<%= classify(name) %>
      }

      console.log('get<%= classify(name) %>s(): data using front-end model: ', formattedData);
      this.<%= camelize(name) %>s = formattedData;
      return formattedData;
    })
  // .subscribe((output: any) => {
  //   this.<%= camelize(name) %>s = output;
  //   console.log('get<%= classify(name) %>s(): <%= camelize(name) %>s: ', this.<%= camelize(name) %>s);
  // })
  ;
}

}
