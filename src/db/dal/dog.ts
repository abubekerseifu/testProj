import { DogDTO } from "../../api/dtos/dog.dto"
import { db } from "../models"
import { DogInput, DogOutput } from "../models/dog.model"

export const create = async (payload: DogInput): Promise<DogOutput> => {
    const dog = await db.Dog.create(payload)
    return dog
}

export const getAll = async (): Promise<DogOutput[]> => {
    return db.Dog.findAll();
}