import { createPostGraphileSchema } from 'postgraphile';

// This script is called from scripts/generate-cache
import { schemas, DATABASE_URL } from './config';
import { options } from './postgraphileOptions';
const { Pool } = require('pg')

async function main() {
  console.log(DATABASE_URL)
  const pgPool = new Pool({
    connectionString: DATABASE_URL,
  })
  await createPostGraphileSchema(pgPool, schemas, {
    ...options,
    writeCache: `${__dirname}/postgraphile.json`,
  })
  await pgPool.end()
}

main().then(null, (e) => {
  // eslint-disable-next-line no-console
  console.error(e)
  process.exit(1)
})
