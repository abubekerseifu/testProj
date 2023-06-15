import * as dogDal from '../dal/dog'
import { DogSortPagination } from '../dal/types'
import { DogInput, DogOutput } from "../models/dog.model"


export const getAll = (query: DogSortPagination): Promise<DogOutput[]> => {
    return dogDal.getAll(query)
}

export const create = async (payload: DogInput): Promise<DogOutput> => {    
    return dogDal.create(payload)
}
