import asyncHandler from "../middleware/asyncHandler.js"
import Menu from "../models/menu.model.js"; 
import  ApiError  from "../utils/ApiError.js"; 
import  ApiResponse  from "../utils/ApiResponse.js"; 
import { uploadOnCloudinary,deleteFromCloudinary} from "../utils/cloudinary.js";


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
        veg,
        tag,
        isAvailable,
    } = req.body;

    if (!name || !category || !description || !price) {
        throw new ApiError(400, "All required fields are mandatory");
    }

    let image = {
        url: "",
        public_id: "",
    }

    if (req.file) {
        const uploadImage = await uploadOnCloudinary(req.file.path);

        image = {
            url: uploadImage.secure_url,
            public_id: uploadImage.public_id
        }
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

    if (req.file) {
        if (menuItem.image?.public_id) {
            await deleteFromCloudinary(menuItem.image.public_id);
        }

        const uploadedImage = await uploadOnCloudinary(req.file.path);

        req.body.image = {
            url: uploadedImage.secure_url,
            public_id: uploadedImage.public_id,
        };
    }

    const updatedMenu = await Menu.findByIdAndUpdate(
        id,
        req.body,
        {
            returnDocument: "after",
            runValidators: true,
        }
    );

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

    if (menuItem.image?.public_id) {
        await deleteFromCloudinary(menuItem.image.public_id);
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
