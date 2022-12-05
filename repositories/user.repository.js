const { where } = require('sequelize');
const models = require('../models');
const User = models.User;

//Get All
const getAll = async () => {
    return await User.findAll();
};

//Get By ID
const getById = async (id) => {
    return await User.findByPk(id);
};

//Get By Email
const getByEmail = async (email) => {
    return await User.findOne({where: {"email": email}});
}

//Insert One
const insertOne = async (data) => {
    return await User.create(data);
};

//Update Put
const update = async (data, id) => {
    return await User.update(data, {where: {"id": id}});
};

//Delete Destroy
const destroy = async (id) => {
    return await User.destroy({
        Where: {id: id}
    });
};

module.exports = {getAll, getById, getByEmail, insertOne, update, destroy};