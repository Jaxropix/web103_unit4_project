import pg from "pg";
import dotenv from "dotenv";

dotenv.config(); // load .env at the top

// fallback to hardcoded values if env vars fail
const PGUSER = process.env.PGUSER || "web103_ustu_user";
const PGPASSWORD = process.env.PGPASSWORD || "kyh8zPVwbww0CqSt6HhonQ5NntoGkMQM";
const PGHOST = process.env.PGHOST || "dpg-d3o3mbali9vc73bpujl0-a.oregon-postgres.render.com";
const PGPORT = process.env.PGPORT || 5432;
const PGDATABASE = process.env.PGDATABASE || "web103_ustu";

const pool = new pg.Pool({
  user: PGUSER,
  password: PGPASSWORD,
  host: PGHOST,
  port: PGPORT,
  database: PGDATABASE,
  ssl: { rejectUnauthorized: false }, // required for Render
});

async function resetDatabase() {
  try {
    console.log("🔄 Resetting database...");
    
    // example table creation
    await pool.query(`
      CREATE TABLE IF NOT EXISTS CustomItem (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        price NUMERIC NOT NULL,
        features JSONB
      );
    `);

    console.log("✅ Tables created successfully!");
  } catch (err) {
    console.error("❌ Error resetting database:", err);
  } finally {
    await pool.end();
  }
}

resetDatabase();
