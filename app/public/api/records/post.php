<?php

// Step 0: Validation

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO Staff
    (radionumber, firstname, lastname, station, phone)
  VALUES (?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['radionumber'],
  $_POST['firstname'],
  $_POST['lastname'],
  $_POST['station'],
  $_POST['phone']
]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/');
