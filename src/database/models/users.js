const User = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    name: Datatypes.STRING,
    email: Datatypes.STRING,
    password: Datatypes.STRING,
    fullName: Datatypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
  })

  return User;
}



module.exports = User;