const {Client} = require('pg')
const client = new Client({
    host: 'dpg-cflnl81gp3ju5h5bpuog-a',
    port:'5432',
    user:'dhruv21',
    database:'learndrive',
    password:'Eu5HfRfZYDkpF6RUSV3Whm3uFdP1iDuK',
    ssl:true,
    connectionString: 'postgres://dhruv21:Eu5HfRfZYDkpF6RUSV3Whm3uFdP1iDuK@dpg-cflnl81gp3ju5h5bpuog-a.oregon-postgres.render.com/learndrive',
})

module.exports= client;  