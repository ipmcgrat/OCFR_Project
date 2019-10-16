USE ocfr26;

CREATE TABLE Staff (
  name VARCHAR(64) PRIMARY KEY,
  radionumber VARCHAR(64),
  station VARCHAR(64),
  certification VARCHAR(64),
  expirationdate DATE DEFAULT NULL
);

INSERT INTO Staff (name, radionumber, station, certification, expirationdate) VALUES
("Taylor McManus", "1213", "North 2", "Firefighter 1", "2021-10-03"),
("Ian McGrath", "1133", "West 3", "Fire Fighter 2", "2021-11-03"),
("Morgan Morrow", "1234", "East 2", "Fire Fighter 1", "2021-12-03"),
("Vishwesh Lamar", "1344", "North 1", "CPR Level 2", "2023-12-02");

CREATE TABLE Enroll(
  name VARCHAR(64) PRIMARY KEY,
  certname VARCHAR(64) PRIMARY KEY,
);

INSERT INTO Enroll (name, certname) VALUES
("Taylor McManus", "CPR for Healthcare Providers"),
("Taylor McManus", "Firefighter I"),
("Ian McGrath", "Firefighter I");

CREATE TABLE Certifications (
  certname VARCHAR(64) PRIMARY KEY,
  certid INTEGER,
  agency VARCHAR(64),
  expyears INTEGER
);

INSERT INTO Certifications (certname, certid, agency, expyears) VALUES
("CPR for Healthcare Providers",1,"American Health Association","2"),
("CPR for the Professional Rescurer",2,"American Red Cross","2"),
("Firefigher I" ,3,"Athens Technical College","3"),
("Firefigher I" ,4,"Ivy Technical College","3"),
("POST" ,5,"Gerogia POST Academy","5");
