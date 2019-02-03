import { Router } from 'express';
import { ProductMeasurement } from '../models/productmeasurementmodel';

export const ProductMeasurements = Router();

// Initial get everything route
ProductMeasurements.get('/', (req, res, next) => {
    ProductMeasurement
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

ProductMeasurements.get('/:id', async (req, res, next) => {
    try {
        const productMeasurement = await ProductMeasurement.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(productMeasurement);
    } catch (e) {
        next(e);
    }
});

// post
ProductMeasurements.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const productMeasurement = await ProductMeasurement.create(req.body);
        res.status(201).json(productMeasurement);
    } catch (e) {
        next(e);
    }
});

// update api/id
ProductMeasurements.put('/:id', async (req, res, next) => {
    try {
        await ProductMeasurement.update<ProductMeasurement>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id