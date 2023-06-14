import { Options, Sequelize } from 'sequelize';

import config from '../src/config/database.js'
class SequelizeConnection {
  private static instance: Sequelize 
  static getInstance(): Sequelize {
    if(!SequelizeConnection.instance){
      SequelizeConnection.instance = new Sequelize(config[process.env.NODE_ENV] as Options);
    }
    return SequelizeConnection.instance;
  }

  static async connect(): Promise<Sequelize> {
    const sequelize = SequelizeConnection.getInstance();
    try {
      await sequelize.authenticate();
      console.log("connected to database successfully")
      return sequelize;
    } catch(ex){
      console.log("Unable to connect to database - " + ex.message)
      return sequelize;
    }
  }

}

export default SequelizeConnection;