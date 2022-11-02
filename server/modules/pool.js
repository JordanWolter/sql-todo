const pg = require('pg');

//DATABASE_HOST=ramirez-db.cwp5rcbcqedy.us-east-1.rds.amazonaws.com



// let pool;

// if(process.env.DATABASE_URL){
//   pool = new pg.pool({
//     connectionString: process.env.DATABASE_URL
//   })
// }

let pool;
if (process.env.DATABASE_URL) {
  pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
  })
}
else {
  pool = new pg.Pool({
    database: "cloud-todo",      // localhost
  });
}

module.exports = pool;