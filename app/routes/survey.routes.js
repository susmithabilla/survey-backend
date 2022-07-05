module.exports = app => {
    const survey = require("../controllers/survey.controller.js");
    
    var router = require("express").Router();
    // Create a new Survey
    router.post("/", survey.create);
   
   // Retrieve a single Survey with id
  router.get("/:id", survey.findOne);
   // Delete all Surveys  
   router.delete("/", survey.deleteAll);
    // Retrieve all Surveys
   router.get("/", survey.findAll);
   router.put("/:id", survey.update);
   router.delete("/:id", survey.delete);
    app.use('/api/surveys+', router);
  };