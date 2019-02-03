import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const connectionStr = 'postgres://hwzadaoc:aREdqc0ZeJDcFY0NuW_xSt9YH-_SiA3k@baasu.db.elephantsql.com:5432/hwzadaoc';

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
