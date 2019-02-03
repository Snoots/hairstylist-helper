import { Router } from 'express';
import { BrandLocation } from '../models/brandlocationmodel';

export const brandLocations = Router();

// Initial get everything route
brandLocations.get('/', (req, res, next) => {
    BrandLocation
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

brandLocations.get('/:id', async (req, res, next) => {
    try {
        const brandLocation = await BrandLocation.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(brandLocation);
    } catch (e) {
        next(e);
    }
});

// post
brandLocations.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const brandLocation = await BrandLocation.create(req.body);
        res.status(201).json(brandLocation);
    } catch (e) {
        next(e);
    }
});

// update api/id
brandLocations.put('/:id', async (req, res, next) => {
    try {
        await BrandLocation.update<BrandLocation>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id