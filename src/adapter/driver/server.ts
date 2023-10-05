import ProductController from "./Product.controller";
import bodyParser from 'body-parser';
import { app } from "./app";

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/api', ProductController);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
