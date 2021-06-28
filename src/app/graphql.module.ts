import {NgModule} from '@angular/core';
import {APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache, ApolloLink} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';
import { environment } from 'src/environments/environment';
import { setContext } from '@apollo/client/link/context';

const uri = environment.apiUrl; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const basic = setContext((operation, context) => {
    let token = localStorage.getItem(environment.jwtHeader)
    let headers = {} as any;
    headers[environment.jwtHeader] = token || '';
    headers['Accept'] = 'charset=utf-8'
    return { headers: headers }
  });
  return {
    link: ApolloLink.from([basic, httpLink.create({uri})]),
    cache: new InMemoryCache(),
  };
}

@NgModule({
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
