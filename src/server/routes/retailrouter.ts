import { Router } from 'express';
import { Retail } from '../models/retailmodel';

export const retails = Router();

// Initial get everything route
retails.get('/', (req, res, next) => {
    Retail
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

retails.get('/:id', async (req, res, next) => {
    try {
        const retail = await Retail.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(retail);
    } catch (e) {
        next(e);
    }
});

// post
retails.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const retail = await Retail.create(req.body);
        res.status(201).json(retail);
    } catch (e) {
        next(e);
    }
});

// update api/id
retails.put('/:id', async (req, res, next) => {
    try {
        await Retail.update<Retail>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id