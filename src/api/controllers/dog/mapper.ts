import {Dog} from '../../interfaces'
import { DogOutput } from '../../../db/models/dog.model'

export const toDog= (dog: DogOutput): Dog => {
    return {
        name: dog.name,
        tailLength: dog.tailLength,
        color: dog.color,
        weight: dog.weight,
    }
}