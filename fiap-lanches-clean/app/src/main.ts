import 'reflect-metadata';
import bodyParser from "body-parser";
import express from "express";
import swaggerUi from  'swagger-ui-express';
import "express-async-errors";
import { logger } from "./configurations/WinstonLog";
import "./configurations/DataSource"
import { router } from "./resources/routers/routes"
import { swaggerConfig } from "./configurations/Swagger"

const port = process.env.PORT || 3000;


const app = express();
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(bodyParser.json());


app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
