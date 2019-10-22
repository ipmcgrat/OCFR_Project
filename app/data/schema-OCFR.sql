USE ocfr26;

CREATE TABLE Staff (
  radionumber VARCHAR(64) PRIMARY KEY,
  firstname VARCHAR(64),
  lastname VARCHAR(64),
  station VARCHAR(64),
  phone VARCHAR(64)
);

INSERT INTO Staff (radionumber, firstname, lastname, station, phone) VALUES
("1213","Taylor", "McManus",  "North 2", "111-222-3333"),
("1133","Ian", "McGrath" "West 3", "444-555-6666"),
("1234","Morgan", "Morrow",  "East 2", "777-888-9999"),
("1344","Vishwesh", "Lamar",  "North 1", "111-123-1234");

CREATE TABLE Enroll(
  radionumber VARCHAR(64),
  certid INTEGER,
  PRIMARY KEY (radionumber,certid)
);

INSERT INTO Enroll (name, certid) VALUES
("1213", 1),
("1213", 3),
("1133", 4);

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
