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
    }
});

const Course = mongoose.models.Course || mongoose.model("Course", schema);

export default Course;