import { connectMongoose } from "../lib/connect";
import { _Class } from "../models/class";
import { Student } from "../models/student";

export const add = async (data) => {
   
    await connectMongoose();

    const _class = await _Class.create(data);

    await Student.updateMany({ class: id }, { $set: { class: null } })
    await data.students.forEach(async element => {
        await Student.findOneAndUpdate({ _id: element }, { $set: { class: id } }, { new: true });
    });

    return _class;
}

export const get = async () => {
    await connectMongoose();

    const _class = await _Class
        .find()
        .populate("students");

    return _class;
}

export const getOne = async (id) => {
    await connectMongoose();

    const _class = await _Class
        .findOne({ _id: id })
        .populate("students");

    return _class;
}

export const update = async (id, data) => {
    await connectMongoose();

    const _class = await _Class.findOneAndUpdate({ _id: id }, { $set: { name: data.name, students: data.students } }, { new: true });

    await Student.updateMany({ class: id }, { $set: { class: null } })
    await data.students.forEach(async element => {
        await Student.findOneAndUpdate({ _id: element }, { $set: { class: id } }, { new: true });
    });

    return _class;
}

export const remove = async (id) => {
    await connectMongoose();

    const _class = await _Class.findOneAndDelete({ _id: id });

    return _class;
}

export const getByName = async (name) => {
    await connectMongoose();

    const _class = await _Class.find({ name: { "$regex": name, "$options": "i" } });

    return _class;
}