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
  name VARCHAR(64),
  certid INTEGER,
  PRIMARY KEY (name,certid)
);

INSERT INTO Enroll (name, certid) VALUES
("Taylor McManus", 1),
("Taylor McManus", 3),
("Ian McGrath", 4);

CREATE TABLE Certifications (
  certid INTEGER PRIMARY KEY,
  certname VARCHAR(64),
  agency VARCHAR(64),
  expyears INTEGER
);

INSERT INTO Certifications (certid, certname, agency, expyears) VALUES
(1,"CPR for Healthcare Providers","American Health Association","2"),
(2,"CPR for the Professional Rescurer","American Red Cross","2"),
(3,"Firefigher I","Athens Technical College","3"),
(4,"Firefigher I","Ivy Technical College","3"),
(5,"POST","Gerogia POST Academy","5");
