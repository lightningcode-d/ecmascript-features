const user = { username: "rayo", age: 19, country: "CO" };
const { username, ...values } = user;
console.log(username);
console.log(values);