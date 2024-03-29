<?php

// Step 0: Validation

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'UPDATE Staff
   SET firstname = ?, lastname = ?, station = ?, phone = ?, email = ? WHERE radionumber=?');

$stmt->execute([
  $_POST['firstname'],
  $_POST['lastname'],
  $_POST['station'],
  $_POST['phone'],
  $_POST['email'],
  $_POST['radionumber']
]);


// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../records/');
