// /*
// 1. Create the following classes:
//     - Book class. It should have an author and publisher property.
//     - Author class. It should have a name and books property.
//     - Publisher class.  It should have an authors and books property.
//     - Review class.  It should have a rating and user property.
//     -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves.

//     your code here...

class Book {
  setBookDetails(authorName, publisherName) {
    this.authorName = authorName;
    this.publisherName = publisherName;
  }

  getAuthorDetails() {
    return this.authorName;
  }

  getPublisherDetails() {
    return this.publisherName;
  }
}

let b1 = new Book();
b1.setBookDetails("abc", "djfkj");
console.log(b1.getAuthorDetails());
console.log(b1.getPublisherDetails());

class Author {
  setAuthorDetails(name, book1, book2, book3) {
    this.name = name;
    this.book1 = book1;
    this.book2 = book2;
    this.book3 = book3;
  }

  getAuthorName() {
    return this.name;
  }

  getBookDetails() {
    return this.book1;
    return this.book2;
    return this.book3;
  }
}

let author = new Author();
author.setAuthorDetails("Peter", "b1", "b2", "b3");
console.log(author.getAuthorName());
console.log(author.getBookDetails());

class Publisher {
  setPublisherDetails(author1, author2, author3, book1, book2, book3) {
    this.author1 = author1;
    this.author2 = author2;
    this.author3 = author3;
    this.book1 = book1;
    this.book2 = book2;
    this.book3 = book3;
  }

  getAuthorDetails() {
    console.log(`${this.author1}, ${this.author2}, ${this.author3}`);
  }

  getBookDetails() {
    console.log(`${this.book1}, ${this.book2}, ${this.book3}`);
  }
}

let p1 = new Publisher();
p1.setPublisherDetails("john", "Adam", "Aron", "b1", "b2", "b3");
p1.getAuthorDetails();
p1.getBookDetails();

class Review {
  setReviewDetails(userName, rating) {
    this.userName = userName;
    this.rating = rating;
  }

  getReviewDetails() {
    console.log(` ${this.userName} gave this ${this.rating} rating`);
  }
}

let review = new Review();
review.setReviewDetails("Harry", 1);
review.getReviewDetails();

// 2. Create the following classes:
//     - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
//     - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
//     - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
//     - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.

//     - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.

//     //your code here...

class Umbrella {
  constructor(orgName) {
    this.orgName = orgName;
  }
  getOrgName() {
    return this.orgName;
  }
}

// let umbrella = new Umbrella();
// umbrella.setOrgName("AllegisGroup");
// console.log(umbrella.getOrgName());

class Company extends Umbrella {
  constructor(compName, empCount, orgName) {
    super(orgName);
    this.compName = compName;
    this.empCount = empCount;
  }

  getCompDetails() {
    return this.compName;
  }

  getEmpCount() {
    console.log(
      ` There are ${this.empCount} employees working in this ${this.compName} under ${this.orgName}`
    );
  }
}

let company1 = new Company("TEK", 300, "AllegisGroup");
let company2 = new Company("Aerotek", 200, "AllegisGroup");
let company3 = new Company("Spartek", 100, "AllegisGroup");
console.log(company1.getCompDetails());
company1.getEmpCount();

console.log(company2.getCompDetails());
company2.getEmpCount();

console.log(company3.getCompDetails());
company3.getEmpCount();

class Site extends Company {
  constructor(compName, siteLoc) {
    super(compName);
    this.siteLoc = siteLoc;
  }

  getSiteLocDetails() {
    console.log(`This ${this.compName} company is located at ${this.siteLoc}`);
  }
}

let siteLoc1 = new Site("TEK", "Dallas");
let siteLocSec = new Site("TEK", "Atlanta");
let siteLocThird = new Site("TEK", "Newyork");
let siteLoc2 = new Site("Aerotek", "california");
let siteLoc2Sec = new Site("Aerotek", "Houston");
let siteLoc2Third = new Site("Aerotek", "Austin");
let siteLoc3 = new Site("Spartek", "Atlanta");
let siteLoc3Sec = new Site("Spartek", "Florida");
let siteLoc3Third = new Site("Spartek", "Minnesota");
siteLoc1.getSiteLocDetails();
siteLocSec.getSiteLocDetails();
siteLocThird.getSiteLocDetails();
siteLoc2.getSiteLocDetails();
siteLoc2Sec.getSiteLocDetails();
siteLoc2Third.getSiteLocDetails();
siteLoc3.getSiteLocDetails();
siteLoc3Sec.getSiteLocDetails();
siteLoc3Third.getSiteLocDetails();

class Employee extends Site {
  constructor(empName, compName, siteLoc, empJob, empSal) {
    super(compName, siteLoc);
    this.empName = empName;
    this.empJob = empJob;
    this.empSal = empSal;
  }

  getEmployeeDetails() {
    console.log(
      `This ${this.empName} works in ${this.compName} located at ${this.siteLoc} as ${this.empJob} with salary of ${this.empSal} `
    );
  }
}

let emp1 = new Employee("john", "TEK", "Dallas", "CEO", 10000);
emp1.getEmployeeDetails();
let emp2 = new Employee("Adam", "Spartek", "Florida", "Manager", 5000);
emp2.getEmployeeDetails();
let emp3 = new Employee("Peter", "Aerotek", "Austin", "Engineer", 5000);
emp3.getEmployeeDetails();
let emp4 = new Employee("Tom", "TEK", "Atlanta", "Engineer", 5000);
emp4.getEmployeeDetails();
let emp5 = new Employee("Jim", "Spartek", "Houston", "Archtect", 7000);
emp5.getEmployeeDetails();
let emp6 = new Employee("Aria", "TEK", "Dallas", "Tester", 5000);
emp6.getEmployeeDetails();
let emp7 = new Employee("Patrick", "Aerotek", "Newyork", "CEO", 10000);
emp7.getEmployeeDetails();
let emp8 = new Employee("Jefferson", "TEK", "Atlanta", "Tester", 7000);
emp8.getEmployeeDetails();
let emp9 = new Employee("Perterson", "TEK", "Houston", "CEO", 10000);
emp9.getEmployeeDetails();
let emp10 = new Employee("Zaria", "Spartek", "Neweyork", "Manager", 10000);
emp10.getEmployeeDetails();

// /****************************************************************************************************************************************************************************************
// Bonus Exercise:

// 3. Building on Exercise 1, Do the following :
// - Create a Bookstore class.  It should contain a collection of various Book Instances.
// - Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
// - Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

// Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
// */

//     //your code here...
