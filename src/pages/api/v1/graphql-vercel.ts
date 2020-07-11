import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import { postgraphile } from 'postgraphile'
import { schemas, DATABASE_URL } from '../../../shared/config';
import { options } from '../../../shared/postgraphileOptions';


const handler = nc<NextApiRequest, NextApiResponse>();

handler.use(Cors()).use(
  postgraphile(DATABASE_URL, schemas, {
    ...options,
    readCache: `${__dirname}/../shared/postgraphile.cache`,
  }),
)


export default handler;