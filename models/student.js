import mongoose from "mongoose";


const studentSchema  = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthDate: {
        type: Date,
        required: true
    },
    register: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Register",
        required: false
    }]
});


const Student = mongoose.models.Student || mongoose.model("Student", studentSchema);

module.exports = { Student }