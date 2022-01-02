const mongoose = require("mongoose")
const { ObjectId } = mongoose.Schema

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        maxlength: 300
    },
    subTitle: {
        type: String,
        maxlength: 300
    },
    slug: {
        type: String,
        required: true
    },
    keywords: {
        type: [],
        maxlength: 500
    },
    description: {
        type: String,
        maxlength: 10000
    },
    Price: {
        type: Number
    },
    category: {
        type: ObjectId,
        ref: "Category"
    },
    subs: [{
        type: ObjectId,
        ref: "Sub"
    }],
}, { timestamps: true })

module.exports = mongoose.model("Blog", blogSchema)