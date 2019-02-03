import { Router } from 'express';
import { Brand } from '../models/brandmodel';

export const brands = Router();

// Initial get everything route
brands.get('/', (req, res, next) => {
    Brand
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

brands.get('/:id', async (req, res, next) => {
    try {
        const brand = await Brand.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(brand);
    } catch (e) {
        next(e);
    }
});

// post
brands.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const brand = await Brand.create(req.body);
        res.status(201).json(brand);
    } catch (e) {
        next(e);
    }
});

// update api/id
brands.put('/:id', async (req, res, next) => {
    try {
        await Brand.update<Brand>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id