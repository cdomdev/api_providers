import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

// cofig for database

const config = {
  host: process.env.HOST,
  user: process.env.USER_DATABASE,
  password: process.env.PASSWORD_DATABASE,
  databe_name: process.env.DATABASE_DATABASE,
};

export const conecction = new Sequelize(
  config.databe_name,
  config.user,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);

conecction
  .sync()
  .then(() => {
    console.log("Conecction success");
  })
  .catch((er) => {
    console.error("Error conecction", er);
  });
