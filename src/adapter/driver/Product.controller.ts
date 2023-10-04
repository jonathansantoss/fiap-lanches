import express, { Request, Response } from 'express';
import { ProductService } from '../../core/applications/services/Product.service';
import { Product } from '../data/Product.model';
import { check, validationResult } from 'express-validator';
import { ProductRepository } from '../driven/infra/repositories/Product.repository';


const productService = new ProductService(new ProductRepository());
const router = express.Router();

router.post(
    '/product',
    [
        check('name').notEmpty().withMessage('Product name is not valid'),
        check('value').notEmpty().isNumeric().withMessage('Product value is not valid'),
        check('amount').notEmpty().isNumeric().withMessage('Product amount is not valid'),
    ],
    (req: Request, res: Response) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }

            const product: Product = req.body;
            const result = productService.saveProduct(product).then();
            res.status(201).json(result);
        } catch (error) {
            console.error(`Post product: ${error.message}`)
            res.status(500).json(error.message)
        }
    }
);


export default router;