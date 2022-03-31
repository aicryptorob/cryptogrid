import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const baseUrl = 'https://coinlib.io/api/v1'

export const client = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
});
