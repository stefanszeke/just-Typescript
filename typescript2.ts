// tuples
// tuples are fixed length arrays

// declare a tuple type
let x: [string, number];
// initialize it
x = ["hello", 10]; // OK
// initialize it incorrectly
// x = [10, "hello"]; // Error

// when accessing an element with a known index, the correct type is retrieved
console.log(x[0].substring(1)); // OK
// console.log(x[1].substring(1)); // Error, 'number' does not have 'substring'

// when accessing an element outside the set of known indices, a union type is used instead
x.push("world"); // OK, 'string' can be assigned to 'string | number'
console.log(x[1].toString()); // OK, 'string' and 'number' both have 'toString'

// console.log(x[2]) // error has not element on index 2
// x[1] = true; // Error, 'boolean' isn't 'string | number'

type Colors1 = 'red' | 'blue' | 'green'
enum Colors2 {red, blue, green}
enum Colors3 {red = "red", blue = "red", green = 'red'}

let color1: Colors1 = 'red'
let color2: Colors2 = Colors2.green
let color3: Colors3 = Colors3.red

console.log(color1)
console.log(color2)
console.log(color3)

