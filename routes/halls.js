import express from "express";
import { createHall, getAllHalls, getHall } from "../controllers/halls.js";

const router = express.Router();

//CREATE
router.post('/', createHall)

//GET Hall
router.get('/', getHall)

//GET ALL
router.get('/', getAllHalls)

export default router