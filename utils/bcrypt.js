const bcrypt = require("bcrypt");
const saltRounds = 10;

const hash = (data) => {
    return bcrypt.hash(data, saltRounds);
};

const compare = (data, hashed) => {
    return bcrypt.compare(data, hashed);
};

module.exports = {hash, compare};