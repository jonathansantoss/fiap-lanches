import express from "express";
import '../../config/DataSource';
import { router } from "./routers/routes";
import swaggerUi from  'swagger-ui-express';
import { swaggerConfig } from '../../config/Swagger';

const app = express();
app.use(express.json());
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerConfig));

export { app };
