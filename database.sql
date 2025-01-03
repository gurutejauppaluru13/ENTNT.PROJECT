CREATE DATABASE calendar_app;

USE calendar_app;

CREATE TABLE company(
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255),
    linkedin VARCHAR(255),
    emails TEXT,
    phone_numbers TEXT,
    comments TEXT,
    periodicity VARCHAR(50)
);

CREATE TABLE communication (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    company_id BIGINT,
    type VARCHAR(255),
    date DATE,
    notes TEXT,
    CONSTRAINT fk_company FOREIGN KEY (company_id) REFERENCES company (id)
);

select * from company;