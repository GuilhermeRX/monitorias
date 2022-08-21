DROP DATABASE IF EXISTS trybeteca;
CREATE DATABASE trybeteca;

CREATE TABLE trybeteca.users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(45) NOT NULL
);

CREATE TABLE trybeteca.books(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(60) NOT NULL
);

INSERT INTO trybeteca.users (first_name) VALUES ('Jon Snow'), ('Arya Stark'), ('Daenarys Targaryen');
INSERT INTO trybeteca.books (name) VALUES ('As Crônicas de Gelo e Fogo'), ('Clean Code'), ('Principios SOLID');