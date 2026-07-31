import asyncHandler from "../middleware/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import Menu from "../models/menu.model.js";
import ApiError from "../utils/ApiError.js";
import Reservation from "../models/reservation.model.js";


const getDashboard = asyncHandler(async(req, res) => {
    const[
        totalMenuItems,
        availableItems,
        unavailableItems,
        totalReservations,
        pendingReservations,
        confirmedReservations,
        completeReservations,
        cancelledReservations,
    ] = await Promise.all([
        Menu.countDocuments(),
        Menu.countDocuments({ isAvailable: true}),
        Menu.countDocuments({ isAvailable: false}),

        Reservation.countDocuments(),
        Reservation.countDocuments({ status: "Pending" }),
        Reservation.countDocuments({ status: "Confirmed" }),
        Reservation.countDocuments({ status: "Completed" }),
        Reservation.countDocuments({ status: "Cancelled" }),
    ]);

    return res.status(200).json(
        new ApiResponse(
            200,
            {
                menu: {
                    total: totalMenuItems,
                    available: availableItems,
                    unavailable: unavailableItems,
                },

                reservations: {
                    total: totalReservations,
                    pending: pendingReservations,
                    confirmed: confirmedReservations,
                    completed: completeReservations,
                    cancelled: cancelledReservations,
                },
            },

            "Dashboard Fetched successfully"
        )
    )
})


export { getDashboard};