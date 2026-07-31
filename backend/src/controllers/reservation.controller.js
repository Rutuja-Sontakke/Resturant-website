import Reservation from "../models/reservation.model.js";
import asyncHandler from "../middleware/asyncHandler.js"
import ApiResponse from "../utils/ApiResponse.js"
import ApiError from "../utils/ApiError.js"


const createReservation = asyncHandler(async(req, res) => {

    const {
        name,
        email,
        phone,
        reservationDate,
        guests,
        message,

    } = req.body;

    if( 
        !name ||
        !email ||
        !phone ||
        !reservationDate ||
        !guests
     ) {
        throw new ApiError(400, "All required fields are mandatory!")
     }

     const reservation = await Reservation.create({
        name, 
        email,
        phone,
        reservationDate,
        guests,
        message
     })

     return res.status(201).json(
        new ApiResponse(
            201,
            reservation, "Resercation booked successfully!"
        )
     )

})


const getReservation = asyncHandler(async(req, res)=> {
    const reservation = await Reservation.find().sort({
        reservationDate: 1,
    })

    return res.status(200).json(
        new ApiResponse(
            200, 
            reservation, "Reservation fectched successfully"
        )
    )

})


const updateReservation = asyncHandler(async(req, res)=> {

    const { id } = req.params;
    const { status } = req.body;

    const allowedStatus = [
        "Pending",
        "Confirmed",
        "Cancelled",
        "Completed",
    ];

    if (!allowedStatus.includes(status)) {
        throw new ApiError(400, "Invalid reservation status")
    }

    const reservation = await Reservation.findById(id) 

    if(!reservation) {
        throw new ApiError(404, "Reservation not found!");
    }

    reservation.status = status;

    await reservation.save();

    return res.status(200).json(
        new ApiResponse(
            200, 
            reservation, "Reservation Updated Successfully"
        )
    )

})

export {
    createReservation,
    getReservation,
    updateReservation
}