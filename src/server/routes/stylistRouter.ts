import { Router } from 'express';
import { Stylist } from '../models/stylistmodel';

export const stylists = Router();

// Initial get everything route
stylists.get('/', (req, res, next) => {
    Stylist
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

// stylists.get('/:id', async (req, res, next) => {
//     try {
//         const stylist = await Stylist.scope(req.query['scope'])
//             .findById(req.params['id']);
//         res.json(stylist);
//     } catch (e) {
//         next(e);
//     }
// });

// // post
// stylists.post('/', async (req, res, next) => {
//     try {
//         console.log(req.body);
//         const stylist = await Stylist.create(req.body);
//         res.status(201).json(stylist);
//     } catch (e) {
//         next(e);
//     }
// });

// // update api/id
// stylists.put('/:id', async (req, res, next) => {
//     try {
//         await Stylist
//             .update<Stylist>(req.body, { where: { id: req.params['id'] } });
//         res.sendStatus(200);
//     } catch (e) {
//         next(e);
//     }
// });

// delete api/id