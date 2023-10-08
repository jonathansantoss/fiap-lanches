import bodyParser from 'body-parser';
import { app } from "./app";
import { logger } from '../../config/WinstonLog';

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
