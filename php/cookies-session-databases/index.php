<?php
// Start the session (always at the very top of the file)
session_start();

require_once "config.php";

$error = "";

if (isset($_POST["login"])) {
  $username = $_POST["username"];
  $password = $_POST["password"];
  $remember = isset($_POST["remember"]);

  $sql = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  $result = $conn->query($sql);
  if ($result->num_rows > 0) {
    $_SESSION["user"] = $username;

    if ($remember) {
      $row = $result->fetch_assoc();
      setcookie("user", $row["username"], time() + (86400 * 30), "/"); // 30 days expiration
    } else {
      setcookie("user", "", time() - 3600, "/"); // Expire the cookie
    }

    header("Location: " . $_SERVER["PHP_SELF"]);
    $conn->close();
    exit();
  } else {
    $error = "Invalid username or password.";
  }
}

if (isset($_GET["action"]) && $_GET["action"] == "logout") {
  session_destroy();
  header("Location: " . $_SERVER["PHP_SELF"]);
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
    <h2>Login</h2>
    <?php if ($error): ?>
      <p style="color: red;"><?php echo $error; ?></p>
    <?php endif; ?>
    <form action="" method="post">
      <input type="text" name="username" placeholder="Username"
        value="<?php echo $_COOKIE["user"] ?? ""; ?>" required><br><br>
      <input type="password" name="password" placeholder="Password" required><br><br>
      <label>
        <input type="checkbox" name="remember"> Remember Me
      </label>
      <br><br>
      <button type="submit" name="login">Login</button>
    </form>
    <a href="register.php">Don't have an account? Register here.</a>
  <?php else: ?>
    <h2>Welcome, <?php echo $_SESSION["user"]; ?>!</h2>
    <p>You are currently authenticated via <b>Session</b>.</p>
    <a href="?action=logout">Logout</a>
  <?php endif; ?>
</body>

</html>