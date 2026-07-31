import mongoose from "mongoose";


const menuSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        
        category: {
            type: String,
            required: true,
            enum: [
                "Breakfast", "breakfast",
                "Lunch", "lunch",
                "Dinner", "dinner",
                "Dessert", "dessert",
                "Beverage", "beverage",
                "Coffee", "coffee",
                "Bakery", "bakery"
            ],
        },

        description: {
            type: String,
            required: true,
            trim: true
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            default: "",
        },

        veg: {
            type: Boolean,
            default: false,

        },

        tag: {
            type: String,
            default: "",
        },

        isAvailable: {
            type: Boolean,
            default: true,
        },

    }, {timestamps: true}
)

const Menu = mongoose.model("Menu", menuSchema);

export default Menu;