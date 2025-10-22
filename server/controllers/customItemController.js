import pool from "../config/database.js"; 


// GET all CustomItems
export const getAllCustomItems = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM CustomItem ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch custom items" });
  }
};

// GET a single CustomItem by ID
export const getCustomItemById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("SELECT * FROM CustomItem WHERE id=$1", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Item not found" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch custom item" });
  }
};

// CREATE a new CustomItem
export const createCustomItem = async (req, res) => {
  const { name, price, features } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO CustomItem (name, price, features) VALUES ($1, $2, $3) RETURNING *",
      [name, price, JSON.stringify(features)]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create custom item" });
  }
};

// UPDATE an existing CustomItem
export const updateCustomItem = async (req, res) => {
  const { id } = req.params;
  const { name, price, features } = req.body;
  try {
    const result = await pool.query(
      "UPDATE CustomItem SET name=$1, price=$2, features=$3 WHERE id=$4 RETURNING *",
      [name, price, JSON.stringify(features), id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: "Item not found" });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update custom item" });
  }
};

// DELETE a CustomItem
export const deleteCustomItem = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query("DELETE FROM CustomItem WHERE id=$1 RETURNING *", [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: "Item not found" });
    res.json({ message: "CustomItem deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete custom item" });
  }
};
