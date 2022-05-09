require("dotenv").config();
const { Pool } = require("pg");

const config = {
  user: process.env.USER_DB,
  host: process.env.HOST_DB,
  password: process.env.PW_DB,
  database: process.env.NAME_DB,
  port: 5432,
};

console.log(config);
const pool = new Pool(config);

const run = () => {
  pool
    .connect()
    .then(() => console.log("Database running"))
    .catch(async (err) => {
      console.log("Database error: ", err);
      await pool.end();
    });
};

const stop = async () => {
  await pool.end().catch((err) => console.log("Error stop database -> ", err));
};

const save = (information = "") => {
  const sql = `INSERT INTO Information (message) VALUES ($1)`;
  pool
    .query(sql, [information])
    .then(() => console.log("Saved information"))
    .catch((err) => console.log(err));
};

module.exports = { run, stop, save };
