//Helper module for querying the DB
//BASE SETUP
//===========================

//CALL THE PACKAGES ------------
const config = require('../../config');
const sql = require("mssql");

module.exports = {

  queryDB: (query, callback, error) => {

    sql.connect(config, (err) => {

      if (err) {
        error(err);
        sql.close();
        return;
      }

      // create Request object
      let request = new sql.Request();

      // query to the database and get the records
      request.query(query, (err, result) => {

        if (err) {
          error(err);
        } else {
            callback(result.recordset);
          }

        sql.close();

      });
    })

  }
}
