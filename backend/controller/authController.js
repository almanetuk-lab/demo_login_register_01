import { pool } from "../config/db.js";


export async function registerUser(req, res) {
    try {
        const { name, email, password } = req.body;

        // Basic validation
        if (!name || !email || !password) {
            return res.status(400).json({ error: 'All fields (name, email, password) are required' });
        }
        const query = `INSERT INTO users (name, email, password)
                      VALUES ($1, $2, $3)
                      RETURNING id, name, email, created_at;`;
        const values = [name, email, password];
        const { rows } = await pool.query(query, values);
        const newUser = rows[0];
        return res.status(201).json({
            message: 'User registered successfully',
            user: newUser,
        });
    } catch (err) {
        if (err.code === '23505') { // unique_violation
            return res.status(409).json({ error: 'Email already exists' });
        }
        console.error('registerUser error:', err);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

export async function loginUser(req, res) {
  try {
    const { email, password } = req.body;

    // Basic validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find user by email and password
    const query = `
      SELECT id, name, email, created_at
      FROM users
      WHERE email = $1 AND password = $2
    `;
    const values = [email, password];

    const { rows } = await pool.query(query, values);

    if (rows.length === 0) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];

    return res.status(200).json({
      message: 'Login successful',
      user,
    });
  } catch (err) {
    console.log('❌ loginUser error:', err);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}