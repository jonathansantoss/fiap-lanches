import bodyParser from "body-parser";
import express from "express";
import './configurations/DataSource';
import swaggerUi from  'swagger-ui-express';
import "express-async-errors";
import { router } from "./resources/routers/routes"
import { swaggerConfig } from "./configurations/Swagger"
import { LoggerImpl } from "./configurations/Logger/LoggerImpl";

const port = process.env.PORT || 3000;


const logger = new LoggerImpl();
const app = express();
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(bodyParser.json());


app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
