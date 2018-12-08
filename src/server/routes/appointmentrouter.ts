import { Router } from 'express';
import { Appointment } from '../models/appointmentmodel';

export const appointments = Router();

// Initial get everything route
appointments.get('/', (req, res, next) => {
    Appointment
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

appointments.get('/:id', async (req, res, next) => {
    try {
        const appointment = await Appointment.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(appointment);
    } catch (e) {
        next(e);
    }
});

// post
appointments.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const appointment = await Appointment.create(req.body);
        res.status(201).json(appointment);
    } catch (e) {
        next(e);
    }
});

// update api/id
appointments.put('/:id', async (req, res, next) => {
    try {
        await Appointment.update<Appointment>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id