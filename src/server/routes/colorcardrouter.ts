import { Router } from 'express';
import { ColorCard } from '../models/colorcardmodel';

export const colorCards = Router();

// Initial get everything route
colorCards.get('/', (req, res, next) => {
    ColorCard
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

colorCards.get('/:id', async (req, res, next) => {
    try {
        const colorCard = await ColorCard.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(colorCard);
    } catch (e) {
        next(e);
    }
});

// post
colorCards.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const colorCard = await ColorCard.create(req.body);
        res.status(201).json(colorCard);
    } catch (e) {
        next(e);
    }
});

// update api/id
colorCards.put('/:id', async (req, res, next) => {
    try {
        await ColorCard.update<ColorCard>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id