import { Router } from 'express';
import { Sale } from '../models/salemodel';

export const sales = Router();

// Initial get everything route
sales.get('/', (req, res, next) => {
    Sale
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

sales.get('/:id', async (req, res, next) => {
    try {
        const sale = await Sale.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(sale);
    } catch (e) {
        next(e);
    }
});

// post
sales.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const sale = await Sale.create(req.body);
        res.status(201).json(sale);
    } catch (e) {
        next(e);
    }
});

// update api/id
sales.put('/:id', async (req, res, next) => {
    try {
        await Sale.update<Sale>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id