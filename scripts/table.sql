drop table if exists todo;
create table todo (
    id serial not null,
    title varchar(100) not null unique,
    description text,
    created_at date default current_timestamp
);
insert into todo(title, description) values('buy milk', 'go shopping');
insert into todo(title, description) values('eat lunch', '-');
insert into todo(title, description) values('study english', 'buy book');
