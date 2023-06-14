import * as dogDal from '../dal/dog'
import { DogInput, DogOutput } from "../models/dog.model"


export const getAll = (): Promise<DogOutput[]> => {
    return dogDal.getAll()
}

export const create = async (payload: DogInput): Promise<DogOutput> => {    
    return dogDal.create(payload)
}
