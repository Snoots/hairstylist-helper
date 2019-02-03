import { Router } from 'express';
import { ProductLocation } from '../models/productlocationmodel';

export const ProductLocations = Router();

// Initial get everything route
ProductLocations.get('/', (req, res, next) => {
    ProductLocation
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

ProductLocations.get('/:id', async (req, res, next) => {
    try {
        const productLocation = await ProductLocation.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(productLocation);
    } catch (e) {
        next(e);
    }
});

// post
ProductLocations.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const productLocation = await ProductLocation.create(req.body);
        res.status(201).json(productLocation);
    } catch (e) {
        next(e);
    }
});

// update api/id
ProductLocations.put('/:id', async (req, res, next) => {
    try {
        await ProductLocation.update<ProductLocation>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id