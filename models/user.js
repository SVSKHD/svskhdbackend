const mongoose = require("mongoose")
const serial = require("generate-serial-number")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    fullname: {
        type: String
    },
    email: {
        type: String,
        required: true,
        index: true
    },
    userId: {
        type: Number,
        default:serial.generate(4)
    },
    profile: {
        type: String,
        maxlength: 300
    },
    role: {
        type: String,
        default: "Subscriber"
    },
    Likes: [{ type: ObjectId, ref: "Likes" }],
})

module.exports = mongoose.model("User", userSchema)