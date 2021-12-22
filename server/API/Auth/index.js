// Library
import express, { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';l

// Models
import { UserModel } from '../../database/user/index'

const Rauter = express.Router();

/*
Route                   /authg/signup
Desc                    Register new user
Params                  none
Access                  Public
Method                  POST
*/
Router.post("/signup", async (req, res) => {
    try{
        const {email, password, fullName, phoneNumber} = req.body.credentials;
        const checkUserByEmail = await UserModel.findOne({ email });
        const checkUserByPhone = await UserModel.findOne({ phoneNumber });

        // check whether email exists
        if (checkUserByEmail || checkUserByPhone) {
            return res.json({email: "User already exists!!"});
        }

        // hash password
        const bcryptSalt = await bcrypt.genSalt(8);
        const hashedPassword = await bcrypt.hash(password, bcryptSalt);

        // Save to db
        await UserModel.create({
            ...req.body.credentials, 
            password: hashedPassword
        });

        // generate JWT auth token
        const token = jwt.sign({ user: {fullName, email} }, "Food-Cafe");
        return res.status(200).json({token, status: "Success!!"});

    } catch(error) {
        return res.status(500).json({ error: error.message });
    }
});