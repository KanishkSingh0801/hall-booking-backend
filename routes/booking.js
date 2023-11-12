import express from "express";
import { createBooking, deleteBooking, getAdminBookings, getAllBookings, getAvailableTimes, getBooking, getUserBookings } from "../controllers/booking.js";

const router = express.Router();

//CREATE
router.post('/createBooking', createBooking)

//DELETE
router.delete('/:id', deleteBooking)

//AVAILABLE SLOTS FOR PARTICULAR HALL
router.get('/availableslots', getAvailableTimes)

//GET User Bookings
router.get('/userBookings', getUserBookings)

//GET ALL
router.get('/allBookings', getAllBookings)

//GET Admin Bookings
router.get('/adminBookings', getAdminBookings)

//GET
router.get('/:id', getBooking)


















// import express from "express";

// const router = express.Router();

// router.get("/", (req,res)=> {
//     res.send("This is booking endpoint");
// })

export default router