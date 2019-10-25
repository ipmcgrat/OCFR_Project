<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
if (isset($_GET['guid'])) {
  $stmt = $db->prepare(
    'SELECT s.radionumber, s.firstname, s.lastname, c.certid, c.certname, c.expyears
    FROM Staff s, Enroll e, Certifications c
    WHERE e.radionumber=s.radionumber AND e.certid=c.certid'
  );
  $stmt->execute([$_GET['guid']]);
} else {
  $stmt = $db->prepare('SELECT s.radionumber, s.firstname, s.lastname, c.certid, c.certname, c.expyears
  FROM Staff s, Enroll e, Certifications c
  WHERE e.radionumber=s.radionumber AND e.certid=c.certid');
  $stmt->execute();
}

$details = $stmt->fetchAll();

// Step 3: Convert to JSON
$json = json_encode($details, JSON_PRETTY_PRINT);

// Step 4: Output
header('Content-Type: application/json');
echo $json;
