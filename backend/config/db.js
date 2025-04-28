import dotenv from 'dotenv';
import pg from 'pg';

const { Pool } = pg;

// Load environment variables
dotenv.config();

const pool = new Pool({
  user:"jay1",
  host:"dpg-d07k2phr0fns738l45lg-a.oregon-postgres.render.com",
  database:"location_1",
  password:"v86WotU5uPmMGn077LNUAtO9MQXCHChs",
  port:parseInt(5432, 10),
  ssl: {
    rejectUnauthorized: false   // <--- important
  }

});

pool.connect()
  .then(() => console.log('✅ Connected to the database'))
  .catch((err) => console.error('❌ Database connection error:', err.message));

export default pool;
