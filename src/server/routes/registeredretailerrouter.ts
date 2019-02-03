import { Router } from 'express';
import { RegisteredRetailer } from '../models/registeredretailermodel';

export const RegisteredRetailers = Router();

// Initial get everything route
RegisteredRetailers.get('/', (req, res, next) => {
    RegisteredRetailer
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

RegisteredRetailers.get('/:id', async (req, res, next) => {
    try {
        const registeredRetailer = await RegisteredRetailer.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(registeredRetailer);
    } catch (e) {
        next(e);
    }
});

// post
RegisteredRetailers.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const registeredRetailer = await RegisteredRetailer.create(req.body);
        res.status(201).json(registeredRetailer);
    } catch (e) {
        next(e);
    }
});

// update api/id
RegisteredRetailers.put('/:id', async (req, res, next) => {
    try {
        await RegisteredRetailer.update<RegisteredRetailer>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id