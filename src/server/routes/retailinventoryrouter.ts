import { Router } from 'express';
import { RetailInventory } from '../models/retailinventorymodel';

export const retailInventories = Router();

// Initial get everything route
retailInventories.get('/', (req, res, next) => {
    RetailInventory
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

retailInventories.get('/:id', async (req, res, next) => {
    try {
        const retailInventory = await RetailInventory.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(retailInventory);
    } catch (e) {
        next(e);
    }
});

// post
retailInventories.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const retailInventory = await RetailInventory.create(req.body);
        res.status(201).json(retailInventory);
    } catch (e) {
        next(e);
    }
});

// update api/id
retailInventories.put('/:id', async (req, res, next) => {
    try {
        await RetailInventory.update<RetailInventory>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id