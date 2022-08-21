import { connectMongoose } from "../lib/connect";
import { Register } from "../models/register";

export const add = async (data) => {
   
    await connectMongoose();

    const register = await Register.create(data);

    return register;
}

export const get = async () => {
    await connectMongoose();

    const register = await Register
    .find()
    .populate(
        {
            path: 'student'
        }
    )
    console.log(register);
    return register;
}

export const getOne = async (id) => {
    await connectMongoose();

    const register = await Register.findOne({ _id: id });

    return register;
}

export const update = async (id, data) => {
    await connectMongoose();

    const register = await Register.findOneAndUpdate({ _id: id }, { $set: { student: data.student, course: data.course, date: data.date } }, { new: true });
    
    return register;
}

export const remove = async (id) => {
    await connectMongoose();

    const register = await Register.findOneAndDelete({ _id: id });

    return register;
}