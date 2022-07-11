module.exports = (sequelize, Sequelize) => {
   
    const Survey = sequelize.define("survey-answers", {
       
      name: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.TEXT,
        get() {
          return (
            JSON.parse(this.getDataValue('json'))
          )
        },
        set(value) {
          this.setDataValue('json', JSON.stringify(value))
        }
      }
    });
  
    return Survey;
  };
  