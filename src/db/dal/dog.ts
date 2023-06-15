import { DogDTO } from "../../api/dtos/dog.dto"
import { db } from "../models"
import { DogInput, DogOutput } from "../models/dog.model"
import { DogSortPagination } from "./types"

export const create = async (payload: DogInput): Promise<DogOutput> => {
    const dog = await db.Dog.create(payload);
    return dog;
}

export const getAll = async (query: DogSortPagination): Promise<DogOutput[]> => {
    const { attribute, order, pageNumber, pageSize } = query;

    const offset = Number((pageNumber - 1) * pageSize);
    const limit = Number(pageSize);

    const options = {
        order: [[attribute, order]],
        limit,
        offset,
    };
    return db.Dog.findAll(options as any);
}