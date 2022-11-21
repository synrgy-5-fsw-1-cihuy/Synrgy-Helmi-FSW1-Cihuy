const express = require('express');
const carRouter = require('./router/cars-router.js');
const app = express();

const PORT = 8001 || process.env.PORT;

app.use(carRouter);


app.listen(PORT, () => {
    console.log(`Application running at localhost:${PORT}`);
});
