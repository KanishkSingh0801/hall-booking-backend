import express from "express";
import { createHall, getAllHalls } from "../controllers/halls.js";

const router = express.Router();

//CREATE
router.post('/', createHall)

//GET ALL
router.get('/', getAllHalls)

// router.get("/", (req,res)=> {
//     res.send("This is halls endpoint")
// })

export default router