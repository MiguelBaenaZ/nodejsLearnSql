CREATE DATABASE BasedeDatosJS;

USE BasedeDatosJS;

--creando tabla comprador
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT FULL,
    phone VARCHAR(15)
);

SHOW TABLES;

describe customer;