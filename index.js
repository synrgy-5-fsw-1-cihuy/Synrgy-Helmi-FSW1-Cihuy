const express = require('express');
const app = express();
const cloudinaryConfig = require('./config/cloudinary');
const formidableMiddleware = require('formidable');
const carRouter = require('./router/cars-router.js');
const PORT = 8001 || process.env.PORT;

//Routing
app.use(carRouter);


app.listen(PORT, () => {
    console.log(`Application running at localhost:${PORT}`);
});
