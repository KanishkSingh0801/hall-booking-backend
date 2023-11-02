import booking from "../models/BookingModel.js"

//CREATE BOOKING
export const createBooking = async (req, res) => {
    const newBooking = new booking(req.body)

    try {
        const savedBooking = await newBooking.save()
        res.status(200).json(savedBooking)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

//DELETE BOOKING
export const deleteBooking = async (req, res) => {
    try {
        const deleteBooking = await booking.findByIdAndDelete(
            req.params.id
        )
        res.status(200).json("Object has been deleted")
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

//GET BOOKING
export const getBooking = async (req, res) => {
    try {
        const hotel = await booking.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

//GET Users BOOKINGS
export const getUserBookings = async (req, res) => {
    try {
        const { Student_ID } = req.body;
        const halls = await booking.find({
            Student_ID
        })
        res.status(200).json(halls)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

//GET Admin BOOKINGS
export const getAdminBookings = async (req, res) => {
    try {
        const halls = await booking.find(req.body)
        res.status(200).json(halls)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

//Get all Bookngs

export const getAllBookings = async (req, res) => {
    try {
        const halls = await booking.find()
        res.status(200).json(halls)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}


export const getAvailableTimes = async (req, res) => {
    try {
        // Fetch approved bookings from MongoDB
        const bookedSlots = await booking.find({ Status: 'approved' });

        // Calculate available time slots
        const openingTime = new Date(); // Define your opening time
        openingTime.setHours(6, 0, 0, 0);

        const closingTime = new Date(); // Define your closing time
        closingTime.setHours(20, 30, 0, 0);
        const timeSlots = [];

        // Generate time slots between openingTime and closingTime
        let currentTime = new Date(openingTime);

        while (currentTime <= closingTime) {
            timeSlots.push(new Date(currentTime));
            currentTime.setMinutes(currentTime.getMinutes() + 30); // 30 minutes interval
        }

        // Remove booked slots from available time slots
        const availableTimeSlots = timeSlots.filter((timeSlot) => {
            return !bookedSlots.some((booking) => {
                return timeSlot >= booking.timeFrom && timeSlot < booking.timeTo;
            });
        });

        res.status(200).json({ availableTimeSlots });
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}
