const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:4081"
};


app.use(function (req, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*');
res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
res.setHeader('Access-Control-Allow-Credentials', true);
next();
});

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Doctor Eye application." });
});

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

require("./app/routes/patient.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
