import { Router } from 'express';
import { Retailer } from '../models/retailermodel';

export const Retailers = Router();

// Initial get everything route
Retailers.get('/', (req, res, next) => {
    Retailer
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

Retailers.get('/:id', async (req, res, next) => {
    try {
        const retailer = await Retailer.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(retailer);
    } catch (e) {
        next(e);
    }
});

// post
Retailers.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const retailer = await Retailer.create(req.body);
        res.status(201).json(retailer);
    } catch (e) {
        next(e);
    }
});

// update api/id
Retailers.put('/:id', async (req, res, next) => {
    try {
        await Retailer.update<Retailer>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id