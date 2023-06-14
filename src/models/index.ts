import SequelizeConnection from "../SequelizeConnection";
import Dog from "./dog.model";

const sequelize = SequelizeConnection.getInstance();

Dog.initModel(sequelize);

export const db = {
    sequelize,
    Dog
}