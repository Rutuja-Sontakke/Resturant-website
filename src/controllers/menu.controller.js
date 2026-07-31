import asyncHandler from "../middleware/asyncHandler.js"
import Menu from "../models/menu.model.js"; 
import  ApiError  from "../utils/ApiError.js"; 
import  ApiResponse  from "../utils/ApiResponse.js"; 

const getMenu = asyncHandler(async (req, res) => {
    const menu = await Menu.find().sort({ createdAt: -1 });

    return res.status(200).json(
        new ApiResponse(
            200,
            menu,
            "Menu fetched successfully"
        )
    );
});

const createMenu = asyncHandler(async (req, res) => {
    const {
        name,
        category,
        description,
        price,
        image,
        veg,
        tag,
        isAvailable,
    } = req.body;

    if (!name || !category || !description || !price) {
        throw new ApiError(400, "All required fields are mandatory");
    }

    const menuItem = await Menu.create({
        name,
        category,
        description,
        price,
        image,
        veg,
        tag,
        isAvailable,
    });

    return res.status(201).json(
        new ApiResponse(
            201,
            menuItem,
            "Menu item created successfully"
        )
    );
});

const updateMenu = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const menuItem = await Menu.findById(id);

    if (!menuItem) {
        throw new ApiError(404, "Menu item not found");
    }

    const updatedMenu = await Menu.findByIdAndUpdate(
        id, 
        req.body, 
        {
            returnDocument: "after",
            runValidators: true,
        });

    return res.status(200).json(
        new ApiResponse(
            200,
            updatedMenu,
            "Menu updated successfully"
        )
    );
});

const deleteMenu = asyncHandler(async (req, res) => {
    const { id } = req.params;

    const menuItem = await Menu.findById(id);

    if (!menuItem) {
        throw new ApiError(404, "Menu item not found");
    }

    await Menu.findByIdAndDelete(id);

    return res.status(200).json(
        new ApiResponse(
            200,
            {},
            "Menu deleted successfully"
        )
    );
});

export {
    getMenu,
    createMenu,
    updateMenu,
    deleteMenu
}
