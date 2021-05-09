const covidModel = require("../models/covid")

exports.get_all_data =  (req, res, next) => {

    covidModel.get_all_data.then((data) => {
        const response = {
          message : "Handling get requests to /covid...",
          users : data
        };
        res.status(200).json(response);

      }).catch(e => console.log(e));
};