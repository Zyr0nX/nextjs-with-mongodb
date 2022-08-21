import { connectMongoose } from "../lib/connect";
import { Student } from "../models/student";
import { Course } from "../models/course";

export const add = async (data) => {
   
    await connectMongoose();

    const student = await Student.create(data);

    return student;
}

export const get = async () => {
    await connectMongoose();

    const student = await Student
        .find()
        .populate("courses");

    return student;
}

export const getOne = async (id) => {
    await connectMongoose();

    const student = await Student
        .findOne({ _id: id })
        .populate("courses");;

    return student;
}

export const update = async (id, data) => {
    await connectMongoose();

    const student = await Student.findOneAndUpdate({ _id: id }, { $set: { name: data.name, birthDate: data.birthDate }, $push: { courses: data.courses } }, { new: true });
    
    const course = await Course.findOneAndUpdate({ _id: data.courses }, { $push: { students: id } }, { new: true });

    return student;
}

export const remove = async (id) => {
    await connectMongoose();

    const student = await Student.findOneAndDelete({ _id: id });

    return student;
}

export const getByName = async (name) => {
    await connectMongoose();

    const student = await Student.find({ name: { "$regex": name, "$options": "i" } });

    return student;
}