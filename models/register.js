import mongoose from "mongoose";

const schema = new mongoose.Schema({
    student: {
        type: String,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

const Register = mongoose.models.Register || mongoose.model("Register", schema);

export default Register;