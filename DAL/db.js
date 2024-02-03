import sql from "mssql";

const config = {
    user: '<your_username>',
    password: '<your_password>',
    server: '<your_server>',
    database: '<your_database>',
    pool: {
        max: 10, // maximum number of connections in the pool
        min: 0, // minimum number of connections in the pool
        idleTimeoutMillis: 30000 // time in milliseconds to wait before closing an unused connection
    }
}

export const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to MSSQL')
    return pool
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err))
