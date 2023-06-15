import * as Joi from 'joi';
import { checkNameUniqueness } from '../../db/dal/dog';
import { NextFunction, Request, RequestHandler, Response } from 'express';

export const createDogSchema: Joi.ObjectSchema = Joi.object({
    name: Joi.string()
        .required()
        .external(async (value) => {
            try {
                const isNameUnique = await checkNameUniqueness(value);
                if (!isNameUnique) {
                    throw new Joi.ValidationError('Name already exists',
                        [
                            {
                                message: 'Name already exists',
                                path: ['name'],
                                type: 'string.unique',
                            },
                        ]
                    , value);
                }
                return value;
            } catch (err) {
                throw err;
            }
        }),
    color: Joi.string().required(),
    tailLength: Joi.number().min(0).required(),
    weight: Joi.number().min(0).required(),
});

export const validate = (schema: Joi.ObjectSchema): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
        const object = req.body;
        try {
            const value = await schema.validateAsync(object, { abortEarly: false });
            return next();
        } catch (error) {
            return res.status(400).json({ error: error, message: "validation error" });
        }
    };
};




