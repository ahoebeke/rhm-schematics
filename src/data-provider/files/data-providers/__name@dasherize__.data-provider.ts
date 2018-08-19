import {Injectable} from '@angular/core';
import {ApidataService} from '../system-providers/apidata.service';
import {ApiEndpointsService} from '../system-providers/api-endpoints.service';
import {Frontend<%= classify(name) %>Interface, <%= classify(name) %>DataAdaptor} from '../data-adaptors/<%= dasherize(name) %>.data-adaptor';


@Injectable({
  providedIn: 'root'
})
export class <%= classify(name) %>sService {

  <%= camelize(name) %>s: Array<any> = [];
  current<%= classify(name) %>: Frontend<%= classify(name) %>Interface;


  constructor(
    private api: ApidataService,
    private endpoint: ApiEndpointsService,
    private <%= camelize(name) %>DataAdaptor: <%= classify(name) %>DataAdaptor
  ) {
    console.log('----------- Creating <%= classify(name) %>sService instance. This message should only be seen once! -----------');
  }

  getCurrent<%= classify(name) %>() {
    // TODO Add this or remove this line.
  }

  get<%= classify(name) %>s(forceRefresh = false): void {

    if (!forceRefresh && this.<%= camelize(name) %>s.length > 0) {
      // TODO add logic to refresh the data under certain conditions

      return; // Already have the data.
    }

    const endpoint = this.endpoint.get<%= classify(name) %>s;
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
        return formattedData;
      })
      .subscribe((output: any) => {
        this.<%= camelize(name) %>s = output;
        console.log('get<%= classify(name) %>s(): <%= camelize(name) %>s: ', this.<%= camelize(name) %>s);
      });
  }

}
