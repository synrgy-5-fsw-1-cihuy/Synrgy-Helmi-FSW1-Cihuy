const repository = require("../repositories/car.repository.js");

// Get All Car Handler
const doGetAllCars = async () => {
    return await repository.getAll();
};


// Get Car By ID Handler
const doGetCarById = async (id) => {
    return await repository.getById(id);
};


// Create Car Handler POST
const doCreateCar = async (data) => {
    return await repository.insertOne(data);
};


// Update Car Handler PUT
const doUpdateCar = async (data, id) => {
    return await repository.update(data, id);
};


// Delete Car Handler DELETE
const doDeleteCarById = async (id) => {
    return await repository.deleteCar(id);
};

module.exports = {doGetAllCars, doGetCarById, doCreateCar, doUpdateCar, doDeleteCarById};