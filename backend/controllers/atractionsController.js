
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
        const { id } = req.params;
        await atractionsModel.findByIdAndDelete(id);
        res.json({success:true, message:"Attraction deleted successfully"});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}
//function for singel attraction details
const singleAttraction = async (req, res) => {
    try {
        const { id } = req.params;
        const attraction = await atractionsModel.findById(id);
        res.json({success:true, attraction});
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//function for updating an attraction completely (PUT)
const updateAttraction = async (req, res) => {
    try {
        const { id } = req.params;
        const {name, description, location, schedule, price, category} = req.body;
        
        // Verificar si la atracción existe
        const attraction = await atractionsModel.findById(id);
        if (!attraction) {
            return res.json({success:false, message:"Attraction not found"});
        }

        // Procesar nuevas imágenes si se proporcionan
        let imagesUrl = attraction.image; // Mantener imágenes existentes por defecto
        
        if (req.files && Object.keys(req.files).length > 0) {
            const image1 = req.files.image1 && req.files.image1[0];
            const image2 = req.files.image2 && req.files.image2[0];
            const image3 = req.files.image3 && req.files.image3[0];
            const image4 = req.files.image4 && req.files.image4[0];

            const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

            if (images.length > 0) {
                imagesUrl = await Promise.all(
                    images.map(async (image) => {
                        let result = await cloudinary.uploader.upload(image.path, {resource_type:"image"});
                        return result.secure_url;
                    })
                );
            }
        }

        // Actualizar todos los campos
        const updatedData = {
            name,
            description,
            location,
            schedule,
            price: Number(price),
            category,
            image: imagesUrl
        };

        await atractionsModel.findByIdAndUpdate(id, updatedData);
        res.json({success:true, message:"Attraction updated successfully"});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

//function for updating an attraction partially (PATCH)
const patchAttraction = async (req, res) => {
    try {
        const { id } = req.params;
        
        // Verificar si la atracción existe
        const attraction = await atractionsModel.findById(id);
        if (!attraction) {
            return res.json({success:false, message:"Attraction not found"});
        }

        // Crear objeto solo con los campos que se envían
        const updateData = {};
        
        if (req.body.name) updateData.name = req.body.name;
        if (req.body.description) updateData.description = req.body.description;
        if (req.body.location) updateData.location = req.body.location;
        if (req.body.schedule) updateData.schedule = req.body.schedule;
        if (req.body.price) updateData.price = Number(req.body.price);
        if (req.body.category) updateData.category = req.body.category;

        // Procesar imágenes nuevas si se proporcionan
        if (req.files && Object.keys(req.files).length > 0) {
            const image1 = req.files.image1 && req.files.image1[0];
            const image2 = req.files.image2 && req.files.image2[0];
            const image3 = req.files.image3 && req.files.image3[0];
            const image4 = req.files.image4 && req.files.image4[0];

            const images = [image1, image2, image3, image4].filter((item) => item !== undefined);

            if (images.length > 0) {
                const imagesUrl = await Promise.all(
                    images.map(async (image) => {
                        let result = await cloudinary.uploader.upload(image.path, {resource_type:"image"});
                        return result.secure_url;
                    })
                );
                updateData.image = imagesUrl;
            }
        }

        await atractionsModel.findByIdAndUpdate(id, updateData);
        res.json({success:true, message:"Attraction partially updated successfully"});

    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message});
    }
}

export {addAttraction, listAttraction, deleteAttraction, singleAttraction, updateAttraction, patchAttraction};

