import express from "express";
import '../driven/infra/config/DataSource';
import { router } from "./routers/routes";

const app = express();
app.use(express.json());
app.use(router);

export { app };
