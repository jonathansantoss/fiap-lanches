import bodyParser from 'body-parser';
import { app } from "./app";

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
