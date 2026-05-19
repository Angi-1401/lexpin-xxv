<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php
  # Classes

  class Fruit
  {
    // Properties
    public $name;
    public $color;

    // Constructor
    public function __construct($name, $color)
    {
      $this->name = $name;
      $this->color = $color;
    }

    public function intro()
    {
      echo "The fruit is $this->name and its color is $this->color.";
    }

    // Destruct
    // function __destruct()
    // {
    //   echo "Name: " . $this->name . ". Color: " . $this->color . ".";
    // }
  }

  class Strawberry extends Fruit
  {
    public function message()
    {
      echo "Am I a fruit or a berry? ";
    }
  }

  $strawberry = new Strawberry("Strawberry", "Red");

  # Interfaces

  interface Animal
  {
    public function makeSound();
  }

  class Cat implements Animal
  {
    public function makeSound()
    {
      echo "Meow";
    }
  }

  class Dog implements Animal
  {
    public function makeSound()
    {
      echo "Woof";
    }
  }

  $cat = new Cat();
  $dog = new Dog();

  # Static Methods

  class Greeting
  {
    public static function welcome()
    {
      echo "Hello, World!";
    }
  }
  ?>

  <div>
    <h1>OOP: Oriented Object Programming</h1>
    <h2>Classes & Inheritance</h2>
    <p>Class Method output:</p>
    <?php
    $strawberry->message();
    echo "<br>";
    $strawberry->intro();
    ?>
    <h2>Interfaces</h2>
    <?php
    $cat->makeSound();
    echo "<br>";
    $dog->makeSound();
    ?>
    <h2>Static Methods</h2>
    <?php
    Greeting::welcome();
    ?>
  </div>
</body>

</html>

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