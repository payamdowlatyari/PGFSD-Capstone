DROP DATABASE IF EXISTS bank;
CREATE DATABASE bank;
USE bank;

CREATE TABLE user (
id VARCHAR(10) NOT NULL,
firstName VARCHAR(30),
lastName VARCHAR(30),
email VARCHAR(30),
phone VARCHAR(10),
address VARCHAR(50),
username VARCHAR(15),
password VARCHAR(15),
user_type VARCHAR(10),
currency VARCHAR(10),
dob DATE,
PRIMARY KEY(id)
);


CREATE TABLE account (
id VARCHAR(10) NOT NULL,
acc_no VARCHAR(10) NOT NULL,
acc_type VARCHAR(10),
balance VARCHAR(10),
PRIMARY KEY(acc_no),
FOREIGN KEY(id) REFERENCES user(id)
);


CREATE TABLE transfer (
tid VARCHAR(10) NOT NULL,
id VARCHAR(10) NOT NULL,
sender_acc VARCHAR(10),
receiver_acc VARCHAR(10),
amount VARCHAR(10),
date DATE,
PRIMARY KEY(tid),
FOREIGN KEY(id) REFERENCES user(id)
);


CREATE TABLE transactionDetails (
tid VARCHAR(10) NOT NULL,
acc_no VARCHAR(10) NOT NULL,
form VARCHAR(10),
action VARCHAR(10),
to_date DATE,
PRIMARY KEY(tid),
FOREIGN KEY(tid) REFERENCES transfer(tid)
);


CREATE TABLE checkBookRequest(
id VARCHAR(10) NOT NULL,
req_status VARCHAR(10),
acc_no VARCHAR(10),
acc_type VARCHAR(10),
no_pages VARCHAR(10),
date DATE,
PRIMARY KEY(id),
FOREIGN KEY(id) REFERENCES user(id)
);

INSERT INTO user VALUES ('101','Payam','Dowlatyari','pdowlatyari@gmail.com','9165478918','2417 Castro Way','admin','admin','admin','USD','1985-09-07');
INSERT INTO account VALUES('101','1001','Checking','2000');
INSERT INTO transfer VALUES('t1101','101','1001','1002','100','2022-05-05');
