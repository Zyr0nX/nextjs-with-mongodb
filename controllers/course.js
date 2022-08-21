import { connectMongoose } from "../lib/connect";
import { Course } from "../models/course";

export const add = async (data) => {
   
    await connectMongoose();

    const course = await Course.create(data);

    return course;
}

export const get = async () => {
    await connectMongoose();

    const course = await Course.find();

    return course;
}

export const getOne = async (id) => {
    await connectMongoose();

    const course = await Course.findOne({ _id: id });

    return course;
}

export const update = async (id, data) => {
    await connectMongoose();

    const course = await Course.findOneAndUpdate({ _id: id }, { $set: { name: data.name, credit: data.credit, time: data.time, course: data.course } }, { new: true });
    
    return course;
}

export const remove = async (id) => {
    await connectMongoose();

    const course = await Course.findOneAndDelete({ _id: id });

    return course;
}