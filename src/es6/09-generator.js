function* iterate(array) {
  for (let value of array) {
    yield value;
  }
}

const it = iterate(["Deiby", "David", "Ana", "Sebas", "Owen"])
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);