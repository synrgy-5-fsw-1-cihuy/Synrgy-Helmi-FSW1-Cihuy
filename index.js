const express = require("express");
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const carRouter = require("./routers/car.router.js");
const userRouter = require("./routers/user.router.js");

const PORT = 8001 || process.env.PORT;
const app = express();

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Binar Car Rental - Challenge-06 API - Helmi",
        version: "0.1.0",
        description:
          "This is a simple CRUD API application made with Express and documented with Swagger",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Binar Synrgy",
          url: "https://binaracademy.com",
          email: "binaracademy.com",
        },
      },
      servers: [
        {
          url: "http://localhost:8005/api/",
        },
      ],
    },
    apis: [
        "./routers/car.router.js",
        "./routers/user.router.js"
    ],
};
const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use(carRouter);
app.use(userRouter);

app.listen(PORT, () => {
    console.log(`Application running at localhost: ${PORT}`);
});