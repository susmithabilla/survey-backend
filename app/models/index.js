const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.survey = require("../models/survey.model.js")(sequelize, Sequelize);
db.survey_answers = require("../models/surveyAnswers.model.js")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});
db.user.hasMany(db.survey,{
  foreignKey:'userId', as:'user',
});
db.survey.hasMany(db.survey_answers,{
  foreignKey:'surveyId', as:'survey',
});
db.user.hasMany(db.survey_answers,{
  foreignKey:'submittedBy', as:'userid',
});
db.ROLES = ["user", "superadmin", "admin"];

module.exports = db;
