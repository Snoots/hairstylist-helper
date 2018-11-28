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
// TODO: Need to add routes for all other actions
// get by api/id
// post new data
// update api/id
// delete api/id