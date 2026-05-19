<!--
Exercises
Create a PHP Class that represent a book with the following requirements:
- Create private properties for: title, author and isAvailable
- Use the constructor to set isAvailable to True as soon as a new book is created.
- Add the following methods:
  - getTitle(): (Public) Returns the book title
  - checkOut(): Changes isAvailable to false and returns a message.
  - returnBook(): Changes isAvailable to true and returns a message.
  - getStatus(): Checks if a book is available or not.
-->

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php
  class book
  {
    public $title;
    public $author;
    public $isAvailable;

    public function __construct($title, $author)
    {
      $this->title = $title;
      $this->author = $author;
      $this->isAvailable = true;
    }
    public function getTitle()
    {
      return $this->title;
    }

    public function checkOut()
    {
      $this->isAvailable = false;
      return "The book '{$this->title}' has been checked out";
    }

    public function returnBook()
    {
      $this->isAvailable = true;
      return "The book '{$this->title}' has been returned";
    }

    public function getStatus()
    {
      if ($this->isAvailable) {
        return "Available";
      } else {
        return "Not available";
      }
    }
  }
  ?>
  <h1>Book</h1>
  <?php
  $book = new Book("El Planeta del Tesoro", "El ser más increíble de la historia");
  echo $book->getTitle();
  echo "<br>";
  echo $book->getStatus();
  echo "<br>";
  echo $book->checkOut();
  echo "<br>";
  echo $book->returnBook();
  ?>
</body>

</html>