import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
  'project-alpha', 'root', 'Psprsx66',        /* DB Name, Username, Password, Config Object is the order the sequelize constructor uses. */
  { host: 'localhost', dialect: 'mysql', logging: false}
);

export default sequelize;
