<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php
  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $x = $_POST['x'] ?? 0;
    $y = $_POST['y'] ?? 0;

    if (!is_numeric($x)) {
      $x = 0;
    }
    if (!is_numeric($y)) {
      $y = 0;
    }

    $sum = $x + $y;
  }

  ?>
  <h1>Simple Arithmetic Forms</h1>

  <h2>Sum of Two Numbers</h2>
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
    <label for="x">Value of X:</label>
    <input type="number" id="x" name="x">
    <label for="y">Value of Y:</label>
    <input type="number" id="y" name="y">
    <button type="submit">Submit</button>
  </form>

  <?php
  if ($sum) {
    echo "<p>The sum of $x and $y is $sum.</p>";
  }
  ?>

</body>

</html>