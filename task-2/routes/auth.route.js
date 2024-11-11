import express, { response } from "express";
import jwt from "jsonwebtoken";
import db from "../db/connectDb.js";
// import { User } from "../models/user.model.js";
const router = express.Router();
import bcrypt from "bcrypt";
import { verifyUser } from "../middleware/authenticate.js";
const salt = 10;

// register
router.post("/user/signup", (req, res) => {
  const sql = "INSERT INTO users(`email`, `password`) VALUES(?)";
  bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
    if (err) return res.json({ Error: "Error hashing password" });
    const values = [req.body.email, hash];
    db.query(sql, [values], (err, result) => {
      if (err) return res.json({ Error: "Inserting data error" });
      return res.json({ Status: "Success" });
    });
  });
});

// login
router.post("/user/login", async (req, res) => {
  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [req.body.email], (err, data) => {
    if (err) return res.json({ Error: "Login error in server" });
    if (data.length > 0) {
      bcrypt.compare(
        req.body.password.toString(),
        data[0].password,
        (err, response) => {
          if (err) return res.json({ Error: "password hash error" });
          if (response) {
            const id = data[0].id;
            const email = data[0].email;
            const token = jwt.sign({ id, email }, process.env.SECRET, {
              expiresIn: "1d",
            });
            res.cookie("token", token);
            return res.json({ Success: "Success" });
          } else {
            return res.json({ Error: "Wrong password" });
          }
        }
      );
    } else {
      return res.json({ Error: "User doesnt exist" });
    }
  });
});

// authenticate user
router.get("/user/me", verifyUser, (req, res) => {
  return res.json({ Status: "Success", email: req.email });
});

export default router;
