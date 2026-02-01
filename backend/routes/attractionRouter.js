import express from 'express';
import { addAttraction, listAttraction, deleteAttraction, singleAttraction } from '../controllers/atractionsController.js';
import upload from '../middleware/multer.js';

const attractionRouter = express.Router();

//RESTful API endpoints for attractions
// GET /api/attractions - Obtener todas las atracciones
attractionRouter.get('/', listAttraction);

// GET /api/attractions/:id - Obtener una atracción específica
attractionRouter.get('/:id', singleAttraction);

// POST /api/attractions - Crear una nueva atracción
attractionRouter.post('/',upload.fields([{name:'image1',maxCount:1}, {name:'image2',maxCount:1}, {name:'image3',maxCount:1},{name:'image4',maxCount:1}]), addAttraction);

// DELETE /api/attractions/:id - Eliminar una atracción
attractionRouter.delete('/:id', deleteAttraction);

export default attractionRouter;
