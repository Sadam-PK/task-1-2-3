import mysql from "mysql2";

// Create a connection to the MySQL container
export const connectDB = () => {
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sadam123?",
    database: "ride_management",
    port: 3306,
  });

  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL:", err);
      return;
    }
    console.log("Connected to MySQL");
  });
};
