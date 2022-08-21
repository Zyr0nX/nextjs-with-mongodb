import mongoose from "mongoose";

import { studentSchema } from "./student";

const registerSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: false
    },
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: false
    },
    date: {
        type: Date,
        required: true
    }
});

mongoose.model("Student", studentSchema);

const Register = mongoose.models.Register || mongoose.model("Register", registerSchema);

module.exports = { Register }