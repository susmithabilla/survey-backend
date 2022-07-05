module.exports = app => {
    const survey = require("../controllers/survey.controller.js");
    
    var router = require("express").Router();
    // Create a new Survey
    router.post("/", survey.create);
    // Retrieve all Surveys
   // Retrieve a single Survey with id
  router.get("/:id", survey.findOne);
   // Delete all Surveys  
   router.delete("/", survey.deleteAll);
    app.use('/api/surveys+', router);
  };