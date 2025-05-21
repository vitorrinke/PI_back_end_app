import type { Knex } from 'knex'
import knex from 'knex';
import dotenv from 'dotenv'

dotenv.config()

const config: { [key: string]: Knex.Config } = {
  development: {
    client: 'mysql2',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATA
    }

    
    }
}

const knexInstance = knex(config.development)

export default knexInstance 