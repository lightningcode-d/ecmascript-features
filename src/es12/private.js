class user {
    //constructor
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    //methods
    #speak() {
      return "Hello";
    }
    greeting() {
      return `${this.speak()} ${this.name}`;
    }
    get #uAge() {
      return this.age;
    }
    set uAge(n) {
      this.age = n;
    }
  }
  
  const bebeloper = new user("Deiby", 15);
  console.log(bebeloper.uAge);
  console.log(bebeloper.uAge = 19);