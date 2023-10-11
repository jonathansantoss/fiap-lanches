import bodyParser from "body-parser";
import "express-async-errors";
import { app } from "./app";
import { logger } from "../../config/WinstonLog";

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use((err, req, res, next) => {
  res.status(500).json({ error: "Internal Server Error" });
});

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
