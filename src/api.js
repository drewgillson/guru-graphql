import { graphqlHapi } from "apollo-server-hapi" // https://github.com/apollographql/apollo-server
// https://www.howtographql.com/advanced/4-security/
import depthLimit from 'graphql-depth-limit' // https://github.com/stems/graphql-depth-limit
import queryComplexity from "graphql-query-complexity" // https://github.com/ivome/graphql-query-complexity
import * as loaders from "@/loaders"
import { formatError } from "@/utilities"
import { schema } from "./schema"
import { Guru } from "./guru"

// GraphQL Caching Examples:
// http://dev.apollodata.com/tools/graphql-tools/connectors.html#DataLoader-and-caching
// https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/index.js#L67-L73
// https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/sql/schema.js#L63
// https://github.com/apollographql/GitHunt-API/blob/cc67a4506c31310b4ba8d811dda11d258c7d60d6/api/github/connector.js

export default {
  plugin: graphqlHapi,
  options: {
    path: `/graphql`,
    graphqlOptions: ({ payload }) => {
      info(`Received query:`, payload)
      const guru = new Guru(GURU_API_USER, GURU_API_KEY)
      return {
        schema,
        context: {
          guru,
          card: loaders.loadCard(guru)
        },
        root_value: schema,
        formatError,
        validationRules: [
          depthLimit(5),
          queryComplexity({
            maximumComplexity: 2000,
            variables: payload?.[0]?.variables || payload?.variables || {},
            onComplete: complexity => { info(`Determined query complexity: ${complexity}`) },
            createError: (max, actual) =>
              new GqlError(`Query is too complex: ${actual}. Maximum allowed complexity: ${max}`)
          })
        ],
        tracing: true,
        debug: true
      }
    },
    route: {
      cors: true
    }
  }
}
