const {pool} = require('./pgConfig')
const sql1 = `
drop table if exists gradebook;
drop table if exists problemset;
drop table if exists characters;
create table characters(id serial primary key, lastname text, firstname text);
create table problemset(id serial primary key, name text);
create table gradebook(id_character int references characters(id), id_problemset int references problemset(id), grade int, primary key(id_character, id_problemset));
insert into characters(lastname, firstname) values
('Potter', 'Harry'), ('Granger', 'Hermione');
insert into problemset(name) values ('Privorotnoye zelye'), ('napitok zhivoy smerti')
insert into gradebook(id_character, id_problemset, grade) values
(1, 1, 3). (1. 2, 5), (2, 1, 5), (2, 2,5)`
pool.query(sql1, (err, res)=>
{
    if(err)
        console.log('Error:', err)
    else
        {
            console.log(res.rows)
            pool.end()
        }
})