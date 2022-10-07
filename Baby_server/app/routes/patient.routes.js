module.exports = app => {
  const patients = require("../controllers/patient.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/", patients.create);

  // Retrieve all Tutorials
  router.get("/", patients.findAll);

  // Retrieve all published Tutorials
  router.get("/published", patients.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", patients.findOne);

  // Update a Tutorial with id
  router.put("/:id", patients.update);

  // Delete a Tutorial with id
  router.delete("/:id", patients.delete);

  // Delete all Tutorials
  router.delete("/", patients.deleteAll);

  app.use('/api/patients', router);
};
