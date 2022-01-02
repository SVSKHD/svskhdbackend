const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const subCategories = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: "Name is required",
        minlength: [2, "Too short"],
        maxlength: [200, "Too long"],
    },
    description: {
        type: String,
        trim: true,
        required: "Description is required",
        minlength: [2, "Too short"],
        maxlength: [400, "Too long"],
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true,
    },
    parent: { type: ObjectId, ref: "Category", required: true },
})

module.exports = mongoose.model("Sub" , subCategories )