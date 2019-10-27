<?php

// Step 0: Validation

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Certifications
   SET certname = ?, agency = ?, expyears = ? WHERE certid=?');

$stmt->execute([
  $_POST['certname'],
  $_POST['agency'],
  $_POST['expyears'],
  $_POST['certid']
]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/');
