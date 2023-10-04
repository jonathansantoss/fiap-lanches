import { ProductService } from "../../core/applications/services/Product.service";
import { ProductRepository } from "../driven/infra/repositories/Product.repository";
import { ProductController } from "./Product.controller";
import { app } from "./app";
const port = process.env.PORT || 3000;

const productRepository = new ProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);

app.post('/product', productController.saveProduct.bind(productController));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
