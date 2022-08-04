import { connectMongoose } from "../lib/connect";
import { Student } from "../models/student";

export const add = async (data) => {
   
    await connectMongoose();

    const student = await Student.create(data);

    return student;
}

export const get = async () => {
    await connectMongoose();

    const student = await Student.find();

    return student;
}

export const getOne = async (id) => {
    await connectMongoose();

    const student = await Student.findOne({ _id: id });

    return student;
}

export const update = async (id, data) => {
    await connectMongoose();
    // Can't update, need fix later
    const student = await Student.findOneAndUpdate({ _id: id }, { $set: { data } }, { new: true });
    return student;
}

export const remove = async (id) => {
    await connectMongoose();

    const student = await Student.findOneAndDelete({ _id: id });

    return student;
}