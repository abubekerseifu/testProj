import { Model, Sequelize } from 'sequelize';
import { DataType } from 'sequelize-typescript';
interface DogAttributes {
    name?: string,
    tailLength?: number,
    weight?: number,
}

class Dog extends Model implements DogAttributes {
    public id!: number;
    public name: string | undefined;
    public tailLength: number | undefined;
    public weight: number | undefined;

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
            tail_length: {
                type: DataType.INTEGER,
            },
            weight: {
                type: DataType.INTEGER,
            }
        }, {
            sequelize,
            underscored:true,
            tableName: 'dogs',
        });
    }
};

export default Dog;