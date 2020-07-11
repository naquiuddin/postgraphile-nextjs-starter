const { Pool } = require('pg')
const fs = require('fs')

// process.env.NODE_ENV !== 'production' && require('dotenv').config()

export const schemas = 'app_public';
export const DATABASE_URL = `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DATABASE_HOST}:5432/${process.env.POSTGRES_DB}`
