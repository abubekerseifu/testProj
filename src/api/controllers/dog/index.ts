import { DogDTO } from '../../dtos/dog.dto'
import { Dog } from '../../interfaces'
import * as service from '../../../db/services/DogService'
import * as mapper from './mapper'
export const getAll = async(): Promise<Dog[]> => {
    return (await service.getAll()).map(mapper.toDog)
}

export const create = async(payload: DogDTO): Promise<Dog> => {
    return mapper.toDog(await service.create(payload))
}