// aarays destructuring

let fruit = ["Apple", "Banana"];
let [a, b] = fruit;
console.log(a, fruit[1]);

//Object destructuring

let user = { username: "Deiby", age: 19 };
let { username, age } = user;
console.log(username, user.age);

// spread operator

let person = { name: "Deiby", age: 19 };
let country = "CO";

let data = { id: 1, ...person, country };
console.log(data);

// rest

function sum(num, ...values) {
  console.log(values);
  console.log(num + values[0]);
  return num + values[0];
}

sum(1, 1, 2, 3);
