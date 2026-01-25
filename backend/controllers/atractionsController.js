
import {v2 as cloudinary} from 'cloudinary';
import atractionsModel from '../models/atraccionesModel.js';
//function for adding attractions
const addAttraction = async (req, res) => {
    try {
        const {name, description, location,schedule,price,category} = req.body;
        const image1 =req.files.image1 && req.files.image1[0];
        const image2 =req.files.image2 && req.files.image2[0];
        const image3 =req.files.image3 && req.files.image3[0];
        const image4 =req.files.image4 && req.files.image4[0];

        const images=[image1,image2,image3,image4].filter( (item)=>  item !== undefined );

        let imagesUrl = await Promise.all(
         images.map( async (image) => {
            let result = await cloudinary.uploader.upload(image.path,{resource_type:"image"});
            return result.secure_url;
         })
        )

        const attractionData = {
            name,
            description,
            location,
            schedule,
            price: Number(price),
            category,
            image: imagesUrl
        }

        console.log(attractionData);
        const atraction = new atractionsModel(attractionData);
        await atraction.save();
        // console.log(name, description, location,schedule,price,category);
        // console.log(imagesUrl);

        res.json({success:true, message:"Attraction added successfully"});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}
//list all attractions
const listAttraction = async (req, res) => {
    try {
        const attractions = await atractionsModel.find({});
        res.json({success:true, attractions});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}
//delete an attraction
const deleteAttraction = async (req, res) => {
    try {
        await atractionsModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Attraction deleted successfully"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}
//function for singel attraction details
const singleAttraction = async (req, res) => {
    try {
        const {attractionId} = req.body
        const attraction = await atractionsModel.findById(attractionId);
        res.json({success:true, attraction});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

export {addAttraction, listAttraction, deleteAttraction, singleAttraction};

