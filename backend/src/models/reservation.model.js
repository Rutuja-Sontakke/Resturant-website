import mongoose from "mongoose"

const reservationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        reservationDate: {
            type: Date,
            required: true,
        },

        guests: {
            type: Number,
            required: true,
            min: 1,
            max: 20,
        },

        message: {
            type: String,
            default: "",
            trim: true,
        },

        status: {
            type: String,
            enum: [
                "Pending",
                "Confirmed",
                "Cancelled",
                "Completed",
            ],
            default: "Pending",
        },

    },{timestamps: true}
)

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;