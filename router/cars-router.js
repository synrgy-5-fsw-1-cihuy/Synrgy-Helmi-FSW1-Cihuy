const express = require('express');
const router = express.Router();
const formidableMiddleware = require('formidable');
const cloudinaryConfig = require('../config/cloudinary.js');
const models = require('../models');
const Car = models.Car;

//POST
router.post('/api/cars', (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };
        console.log(fields);
        console.log(files.foto);
        
        cloudinaryConfig.uploader.upload(files.foto.filepath, function(err, result) {
            if (err) {
                next(err);
                return;
            }

            Car.create({
                name: fields.name,
                price: fields.price,
                size: fields.size,
                foto: result.secure_url
            }).then(result => {
                response.status(201).json({message: "Car successfully created", body: fields});
            });
        });
    });
});

//GET ALL
router.get('/api/cars', (request, response) => {
    Car.findAll().then(result => {
        response.status(200).json({message: "Get All Car successfully", body: result});
    });
});

//GET BY ID
router.get('/api/cars/:id', (request, response) => {
    Car.findByPk(request.params.id).then(result => {
        if(result == null){
        response.status(404).json({message: "Car Not Found", body: result});
        return;
        }
        response.status(200).json({message: "Get Car ById successfully", body: result});
    });
});

//UPDATE
router.put('/api/cars/:id', (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Car.findByPk(request.params.id).then(result => {
            if(result == null) {
                response.status(404).json({message: "Car not found",data: {}});
                return;
            }

            Car.update(fields, {where: {id: request.params.id}}).then(result => {
                response.status(200).json({message: "Car successfully update", data: result});
            }).catch(err => {
                console.error(err);
                throw err;
            });
            
        }).catch(err => {
            console.error(err);
            throw err;
        });

    });
});

//DELETE
router.delete('/api/cars/:id', (request, response) => {
    Car.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({message: "Car not found",data: {}});
            return;
        }

        Car.destroy({where: {id: request.params.id}}).then(result => {
            response.status(204).json({message: "Car success delete",data: {}});
        });
        
    }).catch(err => {
        console.error(err);
        throw err;
    });
});



module.exports = router;