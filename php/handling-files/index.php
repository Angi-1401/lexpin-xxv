<?php
# Handling Files in PHP

/**
 * Include
 * Will produce a warning (E_WARNING) but the script will
 * continue.
 * Best for prescindible files or use cases where the file is not
 * critical for the application to run.
 */

/**
 * Require
 * Will produce a fatal error (E_ERROR) and the script will stop
 * Best for files that are critical for the application to run.
 * like configuration files or database connections.
 */
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Handling Files in PHP</title>
</head>

<body>
  <?php require "config/config.php"; ?>

  <?php include "layouts/header.php"; ?>
  <main>
    <h2>Welcome to Handling Files in PHP</h2>
    <p>This is the main content area where you can learn about including and requiring files in PHP.</p>
  </main>
  <?php include "layouts/footer.php"; ?>
</body>

</html>