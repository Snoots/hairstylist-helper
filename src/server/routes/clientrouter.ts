import { Router } from 'express';
import { Client } from '../models/clientmodel';

export const clients = Router();

// Initial get everything route
clients.get('/', (req, res, next) => {
    Client
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

clients.get('/:id', async (req, res, next) => {
    try {
        const client = await Client.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(client);
    } catch (e) {
        next(e);
    }
});

// post
clients.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const client = await Client.create(req.body);
        res.status(201).json(client);
    } catch (e) {
        next(e);
    }
});

// update api/id
clients.put('/:id', async (req, res, next) => {
    try {
        await Client.update<Client>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id