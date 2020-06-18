/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.  

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are: 
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/

class Creature {
  //your code here...
  constructor() {
    if (this.constructor == Creature) {
      throw new Error("Unable to instantiate");
    }
  }

  move() {
    throw new Error("this is an abstract method");
  }

  eats() {
    throw new Error("this is an abstract method");
  }
}

class Human extends Creature {
  //your code here...
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  move() {
    console.log(` ${this.color} ${this.name} walks, runs`);
  }

  eats() {
    console.log(` ${this.color} ${this.name} eats food`);
  }
}

let human = new Human("people", "all colored");
human.move();
human.eats();

class Bird extends Creature {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  move() {
    console.log(`${this.name} flies`);
  }

  eats() {
    console.log(`${this.name} eats worms`);
  }
}

let bird = new Bird("blueBird", "blue");
bird.move();
bird.eats();

class Dinosaur extends Creature {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  move() {
    console.log(`${this.name} runs`);
  }

  eats() {
    console.log(`${this.name} eats meat`);
  }
}

let dinosaur = new Dinosaur("T-Rex", "Grey");
dinosaur.move();
dinosaur.eats();

class Fish extends Creature {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  move() {
    console.log(`${this.name} swims`);
  }

  eats() {
    console.log(`${this.name} eats fish`);
  }
}

let fish = new Fish("redFish", "red");
fish.move();
fish.eats();

class Reptile extends Creature {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  move() {
    console.log(`${this.name} crawls`);
  }

  eats() {
    console.log(`${this.name} eats snakes`);
  }
}

let reptile = new Reptile("redReptile", "red");
reptile.move();
reptile.eats();

/*
2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
*/

class Person {
  name;

  eat() {
    console.log(this.name + " is eating");
  }

  sleep = () => {
    console.log(this.name + " is sleeping");
  };

  code = function () {
    console.log(this.name + " is coding");
  };

  repeat = function () {
    console.log(this.name + " is repeating the above steps, yet another time");
  };

  explain() {
    //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
    console.log(
      "this explain method should contain explain what you had to do to get the correct functions to work, and the reasoning behind what you did."
    );
  }
}

class Teacher extends Person {
  //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.

  constructor(name) {
    super(name);
    this.name = name;
  }

  eat() {
    console.log(this.name + " loves to teach before eating");
  }

  sleep = () => {
    console.log(this.name + " sleeps after preparing the lesson plan");
  };

  code = function () {
    console.log(this.name + " codes first, then teaches it the next day.");
  };

  repeat = function () {
    console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
  };

  explain() {
    console.log(
      "The functions in the child class will be called after creating object of the child class, if both parent and child classes have the same methodname"
    );
  }
}

let teacher = new Teacher("Dr. Teacher");

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();
teacher.explain();

class Student extends Person {
  //set up your methods in this student class, so all of these methods will override the methods from the super class.
  constructor(name) {
    super(name);
    this.name = name;
  }
  //eat method should print out - <stduent name> studies, then eats
  eat() {
    console.log(`${this.name} loves to eat non-vegetarian food`);
  }
  //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep
  sleep = () => {
    console.log(`${this.name} sleeps 8 hours a day`);
  };
  //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
  code = function () {
    console.log(`${this.name} loves to code in java the most`);
  };
  //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat.
  repeat = function () {
    console.log(`${this.name} eats, sleeps, code, repeats activities daily `);
  };
  explain() {
    console.log(
      "The functions in the child class will be called after creating object of the child class, if both parent and child classes have the same methodname"
    );
  }
}

let student = new Student("Pupil Student");

student.eat();
student.sleep();
student.code();
student.repeat();
student.explain();

// //****************************************************************************************************************************************************************************************
// //Bonus Exercise:

// //3. Consider the following class:

// class Cook {

//     prepare(food1,food2,food3) {
//         console.log("The cook is cooking " + food1, food2, food3);
//     }

//     prepare = function() {
//         console.log('The cook is cooking');
//     }

//     explain = () => {
//         console.log("what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method.");
//     }

// }

// const cook = new Cook();

// cook.prepare("turkey","salami","pizza");

// cook.explain();
