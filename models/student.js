import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: String,
        required: true
    },
    courses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true
    }],
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: false
    }
});

const Student = mongoose.models.Student || mongoose.model("Student", schema);

module.exports = { Student }