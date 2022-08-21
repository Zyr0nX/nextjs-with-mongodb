import { connectMongoose } from "../lib/connect";
import { Student } from "../models/student";
import { Course } from "../models/course";
import { _Class } from "../models/class";

export const add = async (data) => {
   
    await connectMongoose();

    const student = await Student.create(data);

    const _class = await _Class.findOneAndUpdate({ _id: data.class }, { $addToSet: { students: student._id } }, { new: true });
    
    await data.courses?.forEach(async element => {
        await Course.findOneAndUpdate({ _id: element }, { $addToSet: { students: id } }, { new: true });
    });

    return student;
}

export const get = async () => {
    await connectMongoose();

    const student = await Student
        .find()
        .populate("courses")
        .populate("class");

    return student;
}

export const getOne = async (id) => {
    await connectMongoose();

    const student = await Student
        .findOne({ _id: id })
        .populate("courses")
        .populate("class");

    return student;
}

export const update = async (id, data) => {
    await connectMongoose();

    const student = await Student.findOneAndUpdate({ _id: id }, { $set: { name: data.name, birthDate: data.birthDate, class: data.class, courses: data.courses } }, { new: true });
    // const student = await Student.findOneAndUpdate({ _id: data.students }, { $set: { class: id } }, { new: true });
    // await Class.updateMany({ }, { $pull: { students: id } })
    const _class = await _Class.findOneAndUpdate({ _id: data.class }, { $addToSet: { students: id } }, { new: true });
    
    await data.courses?.forEach(async element => {
        await Course.findOneAndUpdate({ _id: element }, { $addToSet: { students: id } }, { new: true });
    });

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