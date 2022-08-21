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
    student: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: false
    }]
});

const Course = mongoose.models.Course || mongoose.model("Course", schema);

export default Course;