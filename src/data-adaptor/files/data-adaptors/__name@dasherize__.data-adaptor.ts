import {Injectable} from '@angular/core';
import {AbstractDataAdaptor, BackendObjectInterface, FrontendObjectInterface} from './abstract.data-adaptor';

export interface Frontend<%= classify(name) %>Interface extends FrontendObjectInterface {
  uuid: string
}

export interface Backend<%= classify(name) %>Interface extends BackendObjectInterface {
  type: string;
  id: string;
  attributes: {
    uuid: string
  };
}

@Injectable()
export class <%= classify(name) %>DataAdaptor implements AbstractDataAdaptor {

  static isValidBackend<%= classify(name) %>(<%= camelize(name) %>: any): boolean {
    return 'id' in <%= camelize(name) %>
      && 'type' in <%= camelize(name) %>
      && <%= camelize(name) %>.type === '<%= underscore(name) %>'; // TODO check, might need to be taxonomy_term
  }

  static isValidFrontend<%= classify(name) %>(<%= camelize(name) %>: any): boolean {
    return '__frontendobject' in <%= camelize(name) %>
      && <%= camelize(name) %>.__frontendobject === 'user_type';
  }

  public getFrontendObject(backend<%= classify(name) %>: Backend<%= classify(name) %>Interface): Frontend<%= classify(name) %>Interface {

    const frontend<%= classify(name) %>: Frontend<%= classify(name) %>Interface = {
      __frontendobject: '<%= underscore(name) %>',
      uuid: backend<%= classify(name) %>.attributes.uuid,
    };

    console.log('getFrontendObject debug : backend<%= classify(name) %>.attributes.uuid = ' + backend<%= classify(name) %>.attributes.uuid);

    // Custom or more complex processing and value assignment can come here.

    return frontend<%= classify(name) %>;
  }

  public getBackendObject(frontend<%= classify(name) %>: Frontend<%= classify(name) %>Interface): Backend<%= classify(name) %>Interface {

    const backend<%= classify(name) %>: Backend<%= classify(name) %>Interface = {
      type: '<%= underscore(name) %>',
      id: frontend<%= classify(name) %>.uuid,
      attributes: {
        uuid: frontend<%= classify(name) %>.uuid,
      }
    };

    // Custom or more complex processing and value assignment can come here.

    return backend<%= classify(name) %>;
  }

}