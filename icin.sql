DROP DATABASE IF EXISTS bank;
CREATE DATABASE bank;
USE bank;

CREATE TABLE user (
id BIGINT(10) NOT NULL AUTO_INCREMENT,
firstname VARCHAR(30),
lastname VARCHAR(30),
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
id BIGINT(10) NOT NULL,
acc_no VARCHAR(10),
acc_type VARCHAR(10),
balance decimal(19,2) DEFAULT NULL,
PRIMARY KEY(id),
FOREIGN KEY(id) REFERENCES user(id)
);


CREATE TABLE transfer (
tid BIGINT(10) NOT NULL AUTO_INCREMENT,
id BIGINT(10) NOT NULL,
sender_acc VARCHAR(10),
receiver_acc VARCHAR(10),
amount decimal(19,2) DEFAULT NULL,
date DATE,
PRIMARY KEY(tid),
FOREIGN KEY(id) REFERENCES user(id)
);


CREATE TABLE transactionDetails (
tid BIGINT(10) NOT NULL,
acc_no VARCHAR(10) NOT NULL,
to_acc VARCHAR(10) NOT NULL,
message VARCHAR(50),
amount decimal(19,2) DEFAULT NULL,
date DATE,
PRIMARY KEY(tid),
FOREIGN KEY(tid) REFERENCES transfer(tid)
);


CREATE TABLE checkBookRequest(
id BIGINT(10) NOT NULL,
req_status INT(1),
acc_no VARCHAR(10),
acc_type VARCHAR(10),
no_pages VARCHAR(10),
date DATE,
PRIMARY KEY(id),
FOREIGN KEY(id) REFERENCES user(id)
);

CREATE TABLE admin(
id BIGINT (10) NOT NULL AUTO_INCREMENT,
username VARCHAR(15) NOT NULL,
password VARCHAR(15) NOT NULL,
PRIMARY KEY(id)
);


INSERT INTO user VALUES ('101','Payam','Dowlatyari','pdowlatyari@gmail.com','9165478918','2417 Castro Way','admin','admin','admin','USD','1985-09-07');
INSERT INTO user VALUES ('102','Mina','Fanaian','minafanaian@gmail.com','9169126468','33 Tehama St','user','user','user','USD','1996-06-13');
INSERT INTO user VALUES ('103','Sam','Black','sam@gmail.com','1234567890','222 Blue St','sam123','sam123','user','USD','1999-09-27');


INSERT INTO account VALUES('101','1001','Checking','2000');
INSERT INTO account VALUES('102','1002','Checking','3000');

INSERT INTO transfer VALUES('1101','101','1001','1002','100','2022-05-05');
INSERT INTO transfer VALUES('1102','102','1002','1001','200','2022-06-05');

INSERT INTO admin VALUES('admin','admin');
