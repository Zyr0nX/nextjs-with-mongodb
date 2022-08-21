import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    credit: {
        type: Number,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: false
    }]
});

const Course = mongoose.models.Course || mongoose.model("Course", schema);

module.exports = { Course }