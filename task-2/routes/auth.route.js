import express from "express";
const router = express.Router();

router.get("/login", (req, res)=>{
    res.json('login routes...')
})

router.post("/login", (req, res)=>{
    console.log('post login');
    
})

export default router;