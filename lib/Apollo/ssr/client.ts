import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const createApolloClient = (url: string) => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: url ?? 'https://your-graphql-endpoint.com/graphql',
      credentials: 'same-origin',
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;