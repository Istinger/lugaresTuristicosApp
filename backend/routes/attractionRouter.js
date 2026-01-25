import express from 'express';
import { addAttraction, listAttraction, deleteAttraction, singleAttraction } from '../controllers/atractionsController.js';
import upload from '../middleware/multer.js';

const attractionRouter = express.Router();

//endpoints for attraction actions
attractionRouter.post('/add',upload.fields([{name:'image1',maxCount:1}, {name:'image2',maxCount:1}, {name:'image3',maxCount:1},{name:'image4',maxCount:1}]), addAttraction);
attractionRouter.post('/remove', deleteAttraction);
attractionRouter.post('/single', singleAttraction);
attractionRouter.get('/list', listAttraction);

export default attractionRouter;
