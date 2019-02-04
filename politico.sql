DROP DATABASE IF EXISTS politicotestdb;
CREATE DATABASE politicotestdb;

\connect politicotestdb;

CREATE TABLE users (
	userid int2 NOT NULL,
	email text NOT NULL,
	password text NOT NULL,
	firstname text NOT NULL,
	lastname text NOT NULL,
	othername text NOT NULL,
	phonenumber text NOT NULL,
	privilege int2 NOT NULL,
	passporturl text NOT NULL,
	contactaddress text NOT NULL,
	CONSTRAINT userspk PRIMARY KEY (email)
);