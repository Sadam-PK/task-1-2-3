import jwt from "jsonwebtoken";
import "dotenv/config";

const SECRET = process.env.SECRET;

export const verifyUser = (req, res, next) => {
  const token = req.cookies?.token;
  // console.log('token ================ ', token);

  if (!token) {
    return res.json({ Error: "You arent authenticated" });
  } else {
    jwt.verify(token, SECRET, (err, decoded) => {
      if (err) {
        return res.json({ Error: "Wrong token" });
      } else {
        req.email = decoded.email;
        next();
      }
    });
  }
};
