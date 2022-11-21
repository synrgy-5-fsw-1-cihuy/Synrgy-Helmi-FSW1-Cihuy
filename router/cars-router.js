const express = require('express');
const router = express.Router();
const formidableMiddleware = require('formidable');
const cloudinaryConfig = require('../config/cloudinary.js');
const models = require('../models');
const Car = models.Car;


//Challenge 5

//contoh model cars yang bisa diambil

// GET ALL Semua CARS
router.get('/api/cars', (request, response) => {
    Car.findAll().then(result => {
        response.status(200).json({data: result});
    });
});




// router.get('/api/cars', (request, response) => {
//     Car.findAll().then(result => {
//         response.status(200).json({data: result});
//     });
// });
// GET BY ID Satu Satu
router.get('/api/cars/:id', (request, response) => {
    Car.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({message: "Car not found"});
            return;
        }

        response.status(200).json({data: result});
    });
});



//API iini



// POST API KIRIM CARS
router.post('/api/cars', (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

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




//update car denagn formidablenya



// UPDATE API PUT CAR
router.put('/api/cars/:id', (request, response) => {
    const form = formidableMiddleware({ });

    form.parse(request, (err, fields, files) => {
        if (err) {
            next(err);
            return;
        };

        Car.findByPk(request.params.id).then(result => {
            if(result == null) {
                response.status(404).json({data: {}});
                return;
            }

            Car.update(fields, {where: {id: request.params.id}}).then(result => {
                response.status(200).json({
                    data: result,
                    message: "Car successfully updated"
                });
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

//  UPDATE API PUT
// router.put('/api/cars/:id', (request, response) => {
//     const form = formidableMiddleware({ });

//     form.parse(request, (err, fields, files) => {
//         if (err) {
//             next(err);
//             return;
//         };

//         Car.findByPk(request.params.id).then(result => {
//             if(result == null) {
//                 response.status(404).json({data: {}});
//                 return;
//             }

//             Car.update(fields, {where: {id: request.params.id}}).then(result => {
//                 response.status(200).json({
//                     data: result,
//                     message: "Car successfully updated"
//                 });
//             }).catch(err => {
//                 console.error(err);
//                 throw err;
//             });
            
//         }).catch(err => {
//             console.error(err);
//             throw err;
//         });

//     });
// });










// DELETE API HAPUS CAR
router.delete('/api/cars/:id', (request, response) => {
    Car.findByPk(request.params.id).then(result => {
        if(result == null) {
            response.status(404).json({data: {}});
            return;
        }

        Car.destroy({where: {id: request.params.id}}).then(result => {
            response.status(204).json({data: {}});
        });
        
    }).catch(err => {
        console.error(err);
        throw err;
    });
});


// DELETE API HAPUS
// router.delete('/api/cars/:id', (request, response) => {
//     Car.findByPk(request.params.id).then(result => {
//         if(result == null) {
//             response.status(404).json({data: {}});
//             return;
//         }

//         Car.destroy({where: {id: request.params.id}}).then(result => {
//             response.status(204).json({data: {}});
//         });
        
//     }).catch(err => {
//         console.error(err);
//         throw err;
//     });
// });

module.exports = router;