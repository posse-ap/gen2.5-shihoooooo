drop database IF EXISTS quizy;
create database quizy;
use quizy;

drop table IF EXISTS big_questions;

CREATE TABLE big_questions(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);

INSERT INTO big_questions VALUES
(1, '東京の難読地名クイズ'),
(2, '広島県の難読地名クイズ');

drop table IF EXISTS questions;

CREATE table questions(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, /*PRIMARY KEY：データを一意に特定するためのカラムを決めるもので、1つのテーブルに必ず1つは必要*/
  big_question_id INT NOT NULL, 
  image VARCHAR(100)
);

INSERT INTO questions VALUES
(1, 1, "takanawaa.png"),
(2, 1, "kameido.png"),
(3, 2, "mukainada.png");

drop table IF EXISTS choices;

CREATE table choices(
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 question_id INT NOT NULL,
 name VARCHAR(150), 
 valid INT NOT NULL
);

INSERT into choices VALUES
(1, 1, "たかなわ", 1),
(2, 1, "たかわ", 0),
(3, 1, "こうわ", 0),
(4, 2, "かめと", 0),
(5, 2, "かめど", 0),
(6, 2, "かめいど", 1),
(7, 3, "むこうひら", 0),
(8, 3, "むきひら", 0),
(9, 3, "むかいなだ", 1);