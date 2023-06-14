import { Model, Optional, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
interface DogAttributes {
    id: number;
    name: string;
    color: string;
    tailLength: number;
    weight: number;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface DogInput extends Optional<DogAttributes, 'id'> {}

export interface DogOutput extends Required<DogAttributes> {}

class Dog extends Model<DogAttributes, DogInput> implements DogAttributes {
    public id!: number;
    public name!: string;
    public color!: string;
    public tailLength!: number;
    public weight!: number;

    public readonly createdAt!: Date; 
    public readonly updatedAt!: Date; 

    static initModel(sequelize: Sequelize):void {
        Dog.init({
            id: {
                type: DataType.INTEGER,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataType.STRING,
                unique: true,
            },
            color: {
                type: DataType.STRING,
                unique: true,
            },
            tailLength: {
                type: DataType.INTEGER,
            },
            weight: {
                type: DataType.INTEGER,
            },
            createdAt: {
                allowNull: true,
                type: DataType.DATE,
                defaultValue: DataType.NOW,
            },
            updatedAt: {
                allowNull: true,
                type: DataType.DATE,
                defaultValue: DataType.NOW,
            },
        }, {
            sequelize,
            underscored:true,
            tableName: 'dogs',
            timestamps: true,
        });
    }
};

export default Dog;