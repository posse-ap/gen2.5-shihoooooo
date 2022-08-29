drop database IF EXISTS quizy;
create database quizy;
use quizy;

drop table IF EXISTS big_questions;

CREATE TABLE big_questions(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(18) DEFAULT 'no_name'
);

INSERT INTO big_questions VALUES
(1, '東京の難読地名クイズ'),
(2, '広島県の難読地名クイズ');