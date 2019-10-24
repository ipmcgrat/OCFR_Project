<?php

// Step 1: Get a datase connection from our help class

$db = DbConnection::getConnection();
// Step 2: Create & run the query
$stmt = $db->prepare('SELECT s.lastName, s.firstName, e.certificationName, c.expPeriod, m.stationNumber, s.radioNumber, s.email
                      FROM Staff as s, Enroll as e, Certifications as c
                      WHERE m.radionumber = e.radionumber AND e.certid = c.certid');
$stmt->execute();
$reports = $stmt->fetchAll();
// Step 3: Convert to JSON

$json = json_encode($reports, JSON_PRETTY_PRINT);
// Step 4: Output

header('Content-Type: application/json');

echo $json;
