import mongoose from "mongoose";

const atractionsSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    schedule: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    image: { type: Array, required: true }
});

// Evitar redefinir el modelo si ya existe
const atractionsModel = mongoose.models.atraction || mongoose.model('atraction', atractionsSchema);
export default atractionsModel;