<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome</title>
</head>

<body>
  <?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  
  echo "<h1>Welcome, $name!</h1>";
  echo "<p>Your email address is $email.</p>";
  ?>
</body>

</html>