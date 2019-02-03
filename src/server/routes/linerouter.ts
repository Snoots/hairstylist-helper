import { Router } from 'express';
import { Line } from '../models/linemodel';

export const lines = Router();

// Initial get everything route
lines.get('/', (req, res, next) => {
    Line
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

lines.get('/:id', async (req, res, next) => {
    try {
        const line = await Line.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(line);
    } catch (e) {
        next(e);
    }
});

// post
lines.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const line = await Line.create(req.body);
        res.status(201).json(line);
    } catch (e) {
        next(e);
    }
});

// update api/id
lines.put('/:id', async (req, res, next) => {
    try {
        await Line.update<Line>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id