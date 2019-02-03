import { Router } from 'express';
import { Product } from '../models/productmodel';

export const Products = Router();

// Initial get everything route
Products.get('/', (req, res, next) => {
    Product
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

Products.get('/:id', async (req, res, next) => {
    try {
        const product = await Product.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(product);
    } catch (e) {
        next(e);
    }
});

// post
Products.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (e) {
        next(e);
    }
});

// update api/id
Products.put('/:id', async (req, res, next) => {
    try {
        await Product.update<Product>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id