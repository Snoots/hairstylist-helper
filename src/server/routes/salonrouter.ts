import { Router } from 'express';
import { Salon } from '../models/salonmodel';

export const Salons = Router();

// Initial get everything route
Salons.get('/', (req, res, next) => {
    Salon
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

Salons.get('/:id', async (req, res, next) => {
    try {
        const salon = await Salon.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(salon);
    } catch (e) {
        next(e);
    }
});

// post
Salons.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const salon = await Salon.create(req.body);
        res.status(201).json(salon);
    } catch (e) {
        next(e);
    }
});

// update api/id
Salons.put('/:id', async (req, res, next) => {
    try {
        await Salon.update<Salon>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id