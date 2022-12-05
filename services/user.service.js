const repository = require("../repositories/user.repository.js");

// Get User By ID Handler
const doGetUserById = async (id) => {
    return await repository.getById(id);
};


// Get User By Email Handler
const doGetUserByEmail = async (email) => {
    return await repository.getByEmail(email);
};


// Create User Handler POST
const doCreateUser = async (data) => {
    return await repository.insertOne(data);
};

module.exports = {doGetUserById, doGetUserByEmail, doCreateUser};