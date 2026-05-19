<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Handling</title>
</head>

<body>
  <?php
  $name = $email = $website = $comment = $gender = "";
  $nameErr = $emailErr = $websiteErr = $commentErr = $genderErr = "";

  if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["name"])) {
      $nameErr = "Name is required";
    } else {
      $name = test_input($_POST["name"]);
      if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
        $nameErr = "Only letters and white space allowed";
      }
    }

    if (empty($_POST["email"])) {
      $emailErr = "Email is required";
    } else {
      $email = test_input($_POST["email"]);
      if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
      }
    }

    if (empty($_POST["website"])) {
      $websiteErr = "Website is required";
    } else {
      $website = test_input($_POST["website"]);
      if (!preg_match("/\b(?:(?:https?|ftp):\/\/|www\.)[-a-z0-9+&@#\/%?=~_|!:,.;]*[-a-z0-9+&@#\/%=~_|]/i", $website)) {
        $websiteErr = "Invalid URL";
      }
    }

    if (empty($_POST["comment"])) {
      $commentErr = "Comment is required";
    } else {
      $comment = test_input($_POST["comment"]);
    }

    if (empty($_POST["gender"])) {
      $genderErr = "Gender is required";
    } else {
      $gender = test_input($_POST["gender"]);
    }
  }

  function test_input($data)
  {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
  }
  ?>

  <h1>PHP Form Validation</h1>
  <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
    Name: <input type="text" name="name">
    <span style="color:red"><?php echo $nameErr; ?></span>
    <br><br>
    Email: <input type="email" name="email">
    <span style="color:red"><?php echo $emailErr; ?></span>
    <br><br>
    Website: <input type="url" name="website">
    <span style="color:red"><?php echo $websiteErr; ?></span>
    <br><br>
    Comment: <textarea name="comment" rows="5" cols="40"></textarea>
    <span style="color:red"><?php echo $commentErr; ?></span>
    <br><br>
    Gender:
    <input type="radio" name="gender" value="female"> Female
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="other"> Other
    <span style="color:red"><?php echo $genderErr; ?></span>
    <br><br>
    <input type="submit" value="Submit">
  </form>

  <?php
  echo "<h2>Your Input:</h2>";
  if (
    $nameErr == "" && $emailErr == "" && $websiteErr == "" && $commentErr == "" && $genderErr == ""
  ) {
    echo "Please fill out all required fields correctly.";
    echo "Name: " . $name . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Website: " . $website . "<br>";
    echo "Comment: " . $comment . "<br>";
    echo "Gender: " . $gender . "<br>";
  } else {
    echo "Please fill out all required fields correctly.";
  }
  ?>

</body>

</html>