// stating

class User {}
// instance of a class
//const newUser = new User();

class user {
  // methods
  greeting() {
    return "Hello";
  }
}

const deiby = new user();
console.log(deiby.greeting());
const deibyloper = new user();
console.log(deibyloper.greeting());

// constructor

class user {
  constructor() {
    console.log("Nuevo usuario");
  }
  greeting() {
    return "Hello";
  }
}

const deibyr = new user();

//this

class user {
  constructor(name) {
    this.name = name;
  }
  //methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
}

const ana = new user("Ana");
console.log(ana.greeting());

// setters getters

class user {
  //constructor
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //methods
  speak() {
    return "Hello";
  }
  greeting() {
    return `${this.speak()} ${this.name}`;
  }
  get uAge() {
    return this.age;
  }
  set uAge(n) {
    this.age = n;
  }
}

const bebeloper = new user("Deiby", 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge = 19);
