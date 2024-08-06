import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import Submit from "./route/Submit.js"
import cors from "cors";


dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.json());

const connectDB = () => {
    try {
        mongoose.connect(process.env.DB, { useNewUrlParser: true,  useUnifiedTopology: true  });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1); // Exit process with failure
    }
};

connectDB();
app.use('/api', Submit); // Use the donation routes

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
