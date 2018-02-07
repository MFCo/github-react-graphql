import { GraphQLClient } from 'graphql-request'

export default new GraphQLClient('https://api.github.com/graphql', {
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GRAPHQL_TOKEN}`,
  },
});