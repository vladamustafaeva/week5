const {Pool} = require('pg')

//вам надо заменить строку на ваш URI
const connectionString = 'postgresql://vadim:12345@localhost:5432/register'

const pool = new Pool(
    {
	    connectionString: connectionString, 
	    ssl: { rejectUnauthorized: false},
    })

module.exports =  pool;
