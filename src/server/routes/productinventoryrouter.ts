import { Router } from 'express';
import { ProductInventory } from '../models/productinventorymodel';

export const ProductInventories = Router();

// Initial get everything route
ProductInventories.get('/', (req, res, next) => {
    ProductInventory
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

ProductInventories.get('/:id', async (req, res, next) => {
    try {
        const productInventory = await ProductInventory.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(productInventory);
    } catch (e) {
        next(e);
    }
});

// post
ProductInventories.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const productInventory = await ProductInventory.create(req.body);
        res.status(201).json(productInventory);
    } catch (e) {
        next(e);
    }
});

// update api/id
ProductInventories.put('/:id', async (req, res, next) => {
    try {
        await ProductInventory.update<ProductInventory>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id