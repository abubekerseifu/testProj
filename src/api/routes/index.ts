import { Router } from 'express'
import * as dogController from '../controllers/dog'
import { DogDTO } from '../dtos/dog.dto';
import { DogSortPagination, createSortAndPagination } from '../../db/dal/types';
import { createDogSchema, validate } from '../validator/dog.validator';

const router = Router()

router.get('/dogs', async (req, res, next) => {
    try{
        const sortAndPagination: DogSortPagination = createSortAndPagination(req.query);
        const results = await dogController.getAll(sortAndPagination);
        return res.status(200).send(results)
    }catch(err) {
        next(err);
    }
});

router.post('/dog', validate(createDogSchema), async (req, res, next) => {
    const payload:DogDTO = req.body;
    try{
        const result = await dogController.create(payload);
        return res.status(200).send(result);
    }catch(err) {
        next(err);
    }
    
})


router.use('/ping', (req, res) => {
    res.send("Dogshouseservice.Version1.0.1")
})

export default router