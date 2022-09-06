const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
  }, {
    tableName: 'users'
  });

  return User;
};

module.exports = User;