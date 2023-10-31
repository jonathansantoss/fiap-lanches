const swaggerJsdoc = require('swagger-jsdoc');


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Fiap Lanches API',
      version: '1.0.0',
      description: 'Documentation for Fiap Lanches API',
    },
  },
  apis: ["./src/adapter/driver/routers/**/*.ts"],
};

const swaggerConfig = swaggerJsdoc(options);

export { swaggerConfig };