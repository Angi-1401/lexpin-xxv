<?php
require_once "config.php";

$error = "";

if (isset($_POST["register"])) {
  $username = $_POST["username"];
  $password = $_POST["password"];
  $confirm_password = $_POST["confirm_password"];

  if ($password !== $confirm_password) {
    $error = "Passwords do not match.";
  } else {
    $sql = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
    if ($conn->query($sql) === TRUE) {
      header("Location: index.php");
      $conn->close();
      exit();
    } else {
      $error = "Error: " . $sql . "<br>" . $conn->error;
      $conn->close();
    }
  }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cookies, Sessions and Databases</title>
</head>

<body>
  <h1>Cookies, Sessions and Databases</h1>
  <?php if (!isset($_SESSION["user"])): ?>
    <h2>Register</h2>
    <?php if ($error): ?>
      <p style="color: red;"><?php echo $error; ?></p>
    <?php endif; ?>
    <form action="" method="post">
      <input type="text" name="username" placeholder="Username"
        value="<?php echo $_COOKIE["user"] ?? ""; ?>" required><br><br>
      <input type="password" name="password" placeholder="Password" required><br><br>
      <input type="password" name="confirm_password" placeholder="Confirm Password" required><br><br>
      <br><br>
      <button type="submit" name="register">Register</button>
    </form>
    <a href="index.php">Already have an account? Login here.</a>
  <?php else: ?>
    <?php header("Location: index.php"); exit(); ?>
  <?php endif; ?>
</body>

</html>