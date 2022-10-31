const pg = require('pg');

let pool = new pg.Pool({
  database: "cloud_to_do"
});

module.exports = pool;