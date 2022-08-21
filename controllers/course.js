import { connectMongoose } from "../lib/connect";
import { Course } from "../models/course";
import { Student } from "../models/student";

export const add = async (data) => {
   
    await connectMongoose();

    const course = await Course.create(data);

    return course;
}

export const get = async () => {
    await connectMongoose();

    const course = await Course
        .find()
        .populate("students");

    return course;
}

export const getOne = async (id) => {
    await connectMongoose();

    const course = await Course
        .findOne({ _id: id })
        .populate("courses");

    return course;
}

export const update = async (id, data) => {
    await connectMongoose();

    const course = await Course.findOneAndUpdate({ _id: id }, { $set: { name: data.name, credit: data.credit, time: data.time } , $push: { students: data.students } }, { new: true });
    
    const student = await Student.findOneAndUpdate({ _id: data.students }, { $push: { courses: id } }, { new: true });

    return course;
}

export const remove = async (id) => {
    await connectMongoose();

    const course = await Course.findOneAndDelete({ _id: id });

    return course;
}

export const getByName = async (name) => {
    await connectMongoose();

    const course = await Course.find({ name: { "$regex": name, "$options": "i" } });

    return course;
}