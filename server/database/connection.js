import mongoose from 'mongoose';

export default async() => {
    return mongoose.connect(process.env.MONGO_URI);
}

/*
, {
        useNewUrlParser: true,
        userUnifiedTopoLogy: true,
        userCreateIndex: true,
        userFindAndModify: false,
    }
*/