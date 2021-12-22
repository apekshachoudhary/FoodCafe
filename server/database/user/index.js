import mongoose, { Schema } from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    email: {type: String, required: true}, 
    password: {type: String}, 
    phoneNumber: [{type: Number}],
    addrress: [{ details: {type: String}, for: {type: String} }]
},{
    timestamps: true
});

export const  UserModel = mongoose.model('Users', UserSchema);