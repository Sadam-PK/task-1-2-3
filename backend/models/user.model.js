import db from "../db/connectDb.js";

export const User = {

  // Get user by email
  getUserByEmail: (email) => {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM users WHERE email = ?";
      db.query(query, [email], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results[0]);
        }
      });
    });
  },
};
