const {pool} = require('./pgCongig')
const sql1 ='select * from characters;'
const sql2 = 'select lastname, grade from characters join gradebook on id_character = characters(id)'
pool.query(sql2, (err, res) =>
{
    if(err)
        console.log('Error:', err)
        else
        {
            console.log(res.rows)
            pool.end
        }
})