import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionStr = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL;

const client = new Pool({
  connectionString: connectionStr,
});

client.connect((err) => {
  if (!err) return console.log('Connected to db');
});

const db = {
  client,
};

export default db;
