import PgSimplifyInflectorPlugin from '@graphile-contrib/pg-simplify-inflector';
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter';
import PgOrderByRelatedPlugin from '@graphile-contrib/pg-order-by-related';
import { Options } from 'postgraphile'

export const options: Options = {
  dynamicJson: true,
  cors: false,
  graphiql: true,
  graphqlRoute: '/api/v1/graphql',
  graphiqlRoute: '/api/v1/graphiql',
  // externalUrlBase: `/${process.env.AWS_STAGE}`,
  absoluteRoutes: false,
  disableQueryLog: false,
  enableCors: false,
  ignoreRBAC: false,
  showErrorStack: false,
  watchPg: false,
  appendPlugins: [PgSimplifyInflectorPlugin, ConnectionFilterPlugin, PgOrderByRelatedPlugin],
}
