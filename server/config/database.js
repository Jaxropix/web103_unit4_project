import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.PGUSER || "web103_ustu_user",
  password: process.env.PGPASSWORD || "kyh8zPVwbww0CqSt6HhonQ5NntoGkMQM",
  host: process.env.PGHOST || "dpg-d3o3mbali9vc73bpujl0-a.oregon-postgres.render.com",
  port: process.env.PGPORT || 5432,
  database: process.env.PGDATABASE || "web103_ustu",
  ssl: { rejectUnauthorized: false }
});

export default pool;
