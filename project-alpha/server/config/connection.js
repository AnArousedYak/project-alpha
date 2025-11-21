import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
const result = dotenv.config();
/*
  env vars weren't loading so I debugged it.
  Turns out I had DB_USERNAME in the .env but DB_USER in the code.
  Fixed the mismatch. Everything works again.
*/
console.log("debug → dotenv returned:", result);


const sequelize = new Sequelize(
  process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST, 
      dialect: process.env.DB_DIALECT, 
      logging: false,
    }
);

export default sequelize;
