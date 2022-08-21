import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    }]
});

const _Class = mongoose.models.Class || mongoose.model("Class", schema);

module.exports = { _Class }