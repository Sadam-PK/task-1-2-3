import mysql from "mysql2";

// connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "sadam123?",
  database: "ride_management",
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

export default db;
