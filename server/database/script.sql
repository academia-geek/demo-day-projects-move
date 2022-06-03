DROP TABLE IF EXISTS service;

DROP TABLE IF EXISTS lender;

DROP TABLE IF EXISTS taker;

DROP TABLE IF EXISTS users;

DROP TYPE IF EXISTS role;

DROP TYPE IF EXISTS conductor_incl ;

DROP TYPE IF EXISTS tipo_renta ;

DROP TYPE IF EXISTS estado_servicio ;

DROP SEQUENCE IF EXISTS seq_id_lender;

DROP SEQUENCE IF EXISTS seq_id_taker;

DROP SEQUENCE IF EXISTS seq_id_service;

CREATE TYPE "role" AS ENUM('admin','prestador', 'tomador', 'usuario');

CREATE TYPE conductor_incl AS ENUM('si','no');

CREATE TYPE tipo_renta AS ENUM('hora','dia','mes');

CREATE TYPE estado_servicio AS ENUM('pendiente','progreso','finalizado');

CREATE SEQUENCE seq_id_lender;

CREATE SEQUENCE seq_id_taker;

CREATE SEQUENCE seq_id_service;



CREATE TABLE users(
  cc_user varchar NOT NULL,
  first_name varchar(100) NOT NULL,
  last_name varchar(100) NOT NULL,
  email varchar(100) NOT NULL,
  city varchar(50) NOT NULL,
  age varchar(2) NOT NULL,
  "role" "role" NOT NULL,
  address varchar(250) NOT NULL,
  uid varchar NOT NULL,
  active_user boolean NOT NULL,
  CONSTRAINT users_pkey PRIMARY KEY(cc_user)
);

CREATE TABLE lender(
  id_lender INT4 NOT NULL DEFAULT NEXTVAL('seq_id_lender'),
  cc_user_fk varchar(10) NOT NULL,
  placa varchar(6) NOT NULL,
  conductor conductor_incl NOT NULL,
  active_pretador boolean NOT NULL,
  saldo_prestador integer,
  total_prestamos integer,
  comision integer,
  CONSTRAINT lender_pkey PRIMARY KEY(id_lender)
);

CREATE TABLE service(
  id_service INT4 NOT NULL DEFAULT NEXTVAL('seq_id_service'),
  id_lender_fk INT4 NOT NULL,
  id_taker_fk INT4 NOT NULL,
  placa varchar(6),
  tipe_renta tipo_renta NOT NULL,
  beginning_service timestamp NOT NULL,
  end_service timestamp NOT NULL,
  estate_servicio estado_servicio NOT NULL,
  km_route integer,
  observatios_service varchar,
  CONSTRAINT service_pkey PRIMARY KEY(id_service)
);

CREATE TABLE taker(
  id_taker INT4 NOT NULL DEFAULT NEXTVAL('seq_id_taker'),
  taker_cc_user varchar(10) NOT NULL,
  url_license_taker varchar(250) NOT NULL,
  CONSTRAINT taker_pkey PRIMARY KEY(id_taker)
);

ALTER TABLE lender
  ADD CONSTRAINT lender_cc_user_fk_fkey
    FOREIGN KEY (cc_user_fk) REFERENCES users (cc_user);

ALTER TABLE service
  ADD CONSTRAINT service_id_lender_fk_fkey
    FOREIGN KEY (id_lender_fk) REFERENCES lender (id_lender);

ALTER TABLE taker
  ADD CONSTRAINT taker_taker_cc_user_fkey
    FOREIGN KEY (taker_cc_user) REFERENCES users (cc_user);

ALTER TABLE service
  ADD CONSTRAINT service_id_taker_fk_fkey
    FOREIGN KEY (id_taker_fk) REFERENCES taker (id_taker);
