const db = require("../models");
const Patient = db.patients;
const Op = db.Sequelize.Op;


// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.IncubatorNo) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Tutorial
  const patient = {
    IncubatorNo: req.body.IncubatorNo,
    PatientName: req.body.PatientName,
    FatherName: req.body.FatherName,
    MotherName: req.body.MotherName,
    ParentContactNo: req.body.ParentContactNo,
    PatientBloodGroup: req.body.PatientBloodGroup,
    PatientDiagnosis: req.body.PatientDiagnosis,
    PatientPrecipitation: req.body.PatientPrecipitation,
    PatientDoctorName: req.body.PatientDoctorName,
    published: req.body.published ? req.body.published : false
  };

  // Save Tutorial in the database
  Patient.create(patient)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Patient."
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const IncubatorNo = req.query.IncubatorNo;
  var condition = IncubatorNo ? { IncubatorNo: { [Op.like]: `%${IncubatorNo}%` } } : null;

  Patient.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Patient."
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Patient.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Patient with id=" + id
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Patient.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Patient was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Patient with id=${id}. Maybe Patient was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Patient with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Patient.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Patient was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Patient with id=${id}. Maybe Patient was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Patient with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Patient.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Patient were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Patient."
      });
    });
};

// find all published Tutorial
exports.findAllPublished = (req, res) => {
  Patient.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Patient."
      });
    });
};
