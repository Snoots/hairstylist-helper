import { Router } from 'express';
import { ColorEntry } from '../models/colorentrymodel';

export const colorEntries = Router();

// Initial get everything route
colorEntries.get('/', (req, res, next) => {
    ColorEntry
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

colorEntries.get('/:id', async (req, res, next) => {
    try {
        const colorEntry = await ColorEntry.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(colorEntry);
    } catch (e) {
        next(e);
    }
});

// post
colorEntries.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const colorEntry = await ColorEntry.create(req.body);
        res.status(201).json(colorEntry);
    } catch (e) {
        next(e);
    }
});

// update api/id
colorEntries.put('/:id', async (req, res, next) => {
    try {
        await ColorEntry.update<ColorEntry>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id