const formidableMiddleware = require("formidable");
const cloudinaryConfig = require("../config/cloudinary.js");
const models = require("../models");
const jwt = require("../utils/jwt.js");
const carService = require("../services/car.service.js")
const Car = models.Car;

//Car Service

// Get All Car Handler
const getAllCarHandler = async (req, res) => {
    try{
        const cars = await carService.doGetAllCars();
        res.status(200).json({data: cars});
    }

    catch(err) {
        console.error(err);
        throw err;
    }
};



// Get Car By ID Handler
const getCarByIdHandler = async (req, res) => {
    try{
        const carById = await carService.doGetCarById(req.params.id, res);

        if (carById == null) {
            res.status(404).json({message: `Car not found with id: ${req.params.id}`});
            return;
        };

        res.status(200).json({data: carById});
    }

    catch(err){
        console.error(err);
        throw err;
    }
};




// Create Car Handler POST 
const postCarHandler = async (req, res) => {
    const form = formidableMiddleware({});

    try{
        form.parse(req, async (err, fields, files) => {
            if (fields.name == undefined || fields.price == undefined || fields.size == undefined || files.photo == undefined) {
                res.end("Data not complete");
                return;
            };
    
            const uploadedFile = await cloudinaryConfig.uploader.upload(files.photo.filepath);
    
            const authHeader = req.headers["authorization"];
            const token = authHeader && authHeader.split(' ')[1];
            const decodedToken = await jwt.checkTokenJwt(token);

            const carPayload = {
                name: fields.name,
                price: fields.price,
                size: fields.size,
                photo: uploadedFile.secure_url,
                createdBy: decodedToken.email
            };
    
            await carService.doCreateCar(carPayload);
    
            return res.status(201).json({
                message: "Car successfully created",
                body: carPayload
            });
        });
    } catch (err) {
        console.error(err);
        throw err;
    }
    
};



// PUT Car Handler Update by ID
const putCarHandler = async (req, res) => {
    const form = formidableMiddleware({});

    try{
        const carById = await carService.doGetCarById(req.params.id, res);

        if (carById == null) {
            res.status(404).json({message: `Car not found with id: ${req.params.id}`});
            return;
        };

        form.parse(req, async (err, fields, files) => {
            if (fields.name == undefined || fields.price == undefined || fields.size == undefined || files.photo == undefined) {
                res.end("Data not complete");
                return;
            };

            const uploadedFile = await cloudinaryConfig.uploader.upload(files.photo.filepath);

            const authHeader = req.headers["authorization"];
            const token = authHeader && authHeader.split(' ')[1];
            const decodedToken = await jwt.checkTokenJwt(token);

            const carPayload = {
                name: fields.name,
                price: fields.price,
                size: fields.size,
                photo: uploadedFile.secure_url,
                updatedBy: decodedToken.email
            };

            await carService.doUpdateCar(carPayload, req.params.id);
            return res.status(201).json({
                message: "Car successfully updated",
                body: carPayload
            });
        });
    }

    catch(err){
        console.error(err);
        throw err;
    }
};



// Delete Car Handler by ID
const deleteCarHandler = async (req, res) => {
    try{
        const carById = await carService.doGetCarById(req.params.id, res);

        if (carById == null) {
            res.status(404).json({message: `Car not found with id: ${req.params.id}`});
            return;
        };

        const authHeader = req.headers["authorization"];
        const token = authHeader && authHeader.split(' ')[1];
        const decodedToken = await jwt.checkTokenJwt(token);
        await carService.doUpdateCar({"deletedBy": decodedToken.email}, req.params.id);

        await carService.doDeleteCarById(carById.id);

        return res.status(204).json({data: ""});
    }

    catch(err){
        console.error(err);
        throw err;
    }
};

module.exports = {getAllCarHandler, getCarByIdHandler, postCarHandler, putCarHandler, deleteCarHandler};