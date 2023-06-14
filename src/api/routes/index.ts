import { Router } from 'express'
import * as dogController from '../controllers/dog'
import { DogDTO } from '../dtos/dog.dto';

const router = Router()

router.get('/dogs', async (req, res) => {
    const results = await dogController.getAll();
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