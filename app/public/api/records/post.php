<?php

// Step 0: Validation
use Ramsey\Uuid\Uuid;

$guid = Uuid::uuid4()->toString();

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Staff
    (name, radionumber, station, certification, expirationdate)
  VALUES (?, ?, ?, ?, ?)'
);

$stmt->execute([
  $guid,
  $_POST['name'],
  $_POST['radionumber'],
  $_POST['station'],
  $_POST['certification'],
  $_POST['expirationdate']
]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/?guid='.$guid);
