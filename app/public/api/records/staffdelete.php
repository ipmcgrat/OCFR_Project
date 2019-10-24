<?php

// Step 1: Get a datase connection from our help class
$db = DbConnection::getConnection();

// Step 2: Create & run the query
  $stmt = $db->prepare(
    'DELETE FROM Staff
    WHERE radionumber = ?'
  );
  $stmt->execute([$_POST['radionumber']]);
