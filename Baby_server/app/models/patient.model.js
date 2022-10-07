module.exports = (sequelize, Sequelize) => {
  const Patient = sequelize.define("patient", {
    IncubatorNo: {
      type: Sequelize.STRING
    },
    PatientName: {
      type: Sequelize.STRING
    },
    FatherName: {
      type: Sequelize.STRING
    },
    MotherName: {
      type: Sequelize.STRING
    },
    ParentContactNo: {
      type: Sequelize.STRING
    },
    PatientBloodGroup: {
      type: Sequelize.STRING
    },
    PatientDiagnosis: {
      type: Sequelize.STRING
    },
     PatientPrecipitation: {
      type: Sequelize.STRING
    },
      PatientDoctorName: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Patient;
};
