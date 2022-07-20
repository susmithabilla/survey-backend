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
  
   router.post("/answers", survey.createSurveyAnswer);
   router.put("/answers/:id", survey.updateSurveyAnswer);
   router.delete("/answers/:id", survey.deleteSurveyAnswer);
   router.delete("/answers/", survey.deleteAllSurveyAnswers);
   router.get("/answers/0/getAllAnswers", survey.findAllSurveyAnswers);
   router.get("/answers/:id", survey.findOneSurveyAnswer);
    app.use('/api/surveys+', router);
  };