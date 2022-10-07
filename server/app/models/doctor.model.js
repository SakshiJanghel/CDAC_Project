module.exports = (sequelize, Sequelize) => {
  const Doctor = sequelize.define("doctor", {
    name: {
      type: Sequelize.STRING
    },
    specialization: {
      type: Sequelize.STRING
    },
    phoneNo: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Doctor;
};
