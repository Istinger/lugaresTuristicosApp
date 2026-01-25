import express  from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js';
import attractionRouter from './routes/attractionRouter.js';


//App config
const app = express();
const port = process.env.PORT || 4000;

//DB config
connectDB();
//Cloudinary config
connectCloudinary();
//middlewares

app.use(express.json());//request parsed to json
app.use(cors());//access backend from any API

//api endpoints

app.use('/api/user',userRouter)
app.use('/api/attractions',attractionRouter);
app.get('/', (req, res) => {
    res.send('API WORKING');
});

//start express server

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});