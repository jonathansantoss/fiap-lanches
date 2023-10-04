import express, { Request, Response } from 'express';
import { ProductService } from '../../core/applications/services/Product.service';
import { Product } from '../data/Product.model';

export class ProductController {
    constructor(private readonly productService: ProductService) { }

    async saveProduct(req: Request, res: Response) {
        const product: Product = req.body;
        const result = await this.productService.saveProduct(product).then();
        res.status(200).json('teste');
    }
}
