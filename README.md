create table characters(id serial primary key,
lastname text, firstname text, username text, password text, email text);
insert into characters(lastname, firstname, username, password, email)
values('Potter', 'Harry', 'potter', '12345', 'potter@hogwarts.edu'),
('Granger', 'Hermione', 'hermiona', '12345', 'hermiona@hogwarts.edu);
select * from characters;