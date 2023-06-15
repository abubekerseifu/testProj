import { Router } from 'express'
import * as dogController from '../controllers/dog'
import { DogDTO } from '../dtos/dog.dto';
import { DogSortPagination, createSortAndPagination } from '../../db/dal/types';

const router = Router()

router.get('/dogs', async (req, res) => {

    const sortAndPagination: DogSortPagination = createSortAndPagination(req.query);
    const results = await dogController.getAll(sortAndPagination);
    return res.status(200).send(results)
})

router.post('/dog', async (req, res) => {
    const payload:DogDTO = req.body;
    const result = await dogController.create(payload);
    return res.status(200).send(result)
})

router.use('/ping', (req, res) => {
    res.send("Dogshouseservice.Version1.0.1")
})

export default router