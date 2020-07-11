import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { postgraphile } from 'postgraphile'
import { schemas, DATABASE_URL } from '../../../shared/config';
import { options } from '../../../shared/postgraphileOptions';

console.log(DATABASE_URL);

const handler = nc<NextApiRequest, NextApiResponse>();
console.log(schemas);
handler.use(Cors()).use(
  postgraphile(DATABASE_URL, schemas, {
    ...options,
    readCache: require('../../../shared/postgraphile')
  }),
)


export default handler;