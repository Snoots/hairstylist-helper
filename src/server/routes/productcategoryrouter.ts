import { Router } from 'express';
import { ProductCategory } from '../models/productcategorymodel';

export const productCategories = Router();

// Initial get everything route
productCategories.get('/', (req, res, next) => {
    ProductCategory
        .findAll()
        .then((data) => {
            return res.json(data);
        })
        .catch((err) => {
            console.log(err);
            return err;
        })
});

productCategories.get('/:id', async (req, res, next) => {
    try {
        const productCategory = await ProductCategory.scope(req.query['scope'])
            .findById(req.params['id']);
        res.json(productCategory);
    } catch (e) {
        next(e);
    }
});

// post
productCategories.post('/', async (req, res, next) => {
    try {
        console.log(req.body);
        const productCategory = await ProductCategory.create(req.body);
        res.status(201).json(productCategory);
    } catch (e) {
        next(e);
    }
});

// update api/id
productCategories.put('/:id', async (req, res, next) => {
    try {
        await ProductCategory.update<ProductCategory>(req.body, { where: { id: req.params['id'] } });
        res.sendStatus(200);
    } catch (e) {
        next(e);
    }
});

// delete api/id