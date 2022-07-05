const db = require("../models");
const Survey = db.survey;
const Op = db.Sequelize.Op;
const fs = require("fs");
// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.query.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a survey
    const survey = {
      title: req.query.title,
      userId: req.query.userId,
      data:req.body,
    };
    // Save survey in the db
    Survey.create(survey)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({
          message:
            err.message || "error occurred while creating survey."
        });
      });
  };
 

 
// Delete all surveys from the database.
exports.deleteAll = (req, res) => {
  Survey.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Surveys  deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "error occurred while removing all surveys."
      });
    });
};
exports.findOne = (req, res) => {
  const id = req.params.id;
  Survey.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No survey found with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error getting survey with id=" + id
      });
    });
};