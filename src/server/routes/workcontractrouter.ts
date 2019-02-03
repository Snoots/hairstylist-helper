import { Router } from 'express';
import { WorkContract } from '../models/workcontractmodel';

export const WorkContracts = Router();

// Initial get everything route
WorkContracts.get('/', (req, res, next) => {
    WorkContract
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

WorkContracts.get('/:id', async (req, res, next) => {
    try {
        const workContract = await WorkContract.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(workContract);
    } catch (e) {
        next(e);
    }
});

// post
WorkContracts.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const workContract = await WorkContract.create(req.body);
        res.status(201).json(workContract);
    } catch (e) {
        next(e);
    }
});

// update api/id
WorkContracts.put('/:id', async (req, res, next) => {
    try {
        await WorkContract.update<WorkContract>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id