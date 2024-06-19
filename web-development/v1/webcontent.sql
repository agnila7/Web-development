create database webProfileContent;
use webProfileContent;

create table information(
id int primary KEY AUTO_INCREMENT,
text varchar(500),
source varchar(100),
sourceName varchar(40),
category varchar(40)
)
select* from information;