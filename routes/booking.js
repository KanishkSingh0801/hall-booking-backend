import express from "express";
import { createBooking, deleteBooking, getAdminBookings, getAllBookings, getAvailableTimes, getBooking, getUserBookings } from "../controllers/booking.js";

const router = express.Router();

//CREATE
router.post('/', createBooking)



//DELETE
router.delete('/:id', deleteBooking)

//AVAILABLE SLOTS FOR PARTICULAR HALL
router.get('/availableslots',getAvailableTimes)

//GET
router.get('/:id', getBooking)

//GET ALL
router.get('/allBookings', getAllBookings)
//Get user Bookings
router.get('/adminBookings', getAdminBookings)
router.get('/userBookings',getUserBookings)


















// import express from "express";

// const router = express.Router();

// router.get("/", (req,res)=> {
//     res.send("This is booking endpoint");
// })

export default router