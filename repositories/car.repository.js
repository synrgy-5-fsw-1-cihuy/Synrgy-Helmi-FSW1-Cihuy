const models = require('../models');
const Car = models.Car;


//Get All
const getAll = async () => {
    return await Car.findAll();
};


//Get By ID
const getById = async (id) => {
    return await Car.findByPk(id);
};


//Insert One
const insertOne = async (data) => {
    return await Car.create(data);
};

//Update Put
const update = async (data, id) => {
    return await Car.update(data, {where: {"id": id}});
};

//Delete Destroy
const deleteCar = async (id) => {
    return await Car.destroy({where: {"id": id}});
};

module.exports = {getAll, getById, insertOne, update, deleteCar};