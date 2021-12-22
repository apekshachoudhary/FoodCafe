require('dotenv').config();
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

// Database connection
import ConnectDB from './database/connection'

const FoodCafe = express();

FoodCafe.use(express.json());
FoodCafe.use(express.urlencoded({extended: false}));
FoodCafe.use(cors());
FoodCafe.use(helmet());

FoodCafe.get("/", (req, res) => {
    res.json({message: "Setup Success!"});
});

FoodCafe.listen(2500, () => 
    ConnectDB()
        .then(() => console.log("Server is up & running!!"))
        .catch(() => console.log('Server is running, but database connection failed!!'))
);