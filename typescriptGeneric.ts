// typescript <T> generic
// is a generic type
// used to create a reusable component

// generic function
function identity<T>(arg: T): T {
    return arg;
}

// generic function call
let output = identity<string>("myString");

//

const makeList = <T>(array: T[]): string => {
    return "\n"+array.map((item, index) => `${index+1}: ${item}`).join("\n")
}

let enumeratedArray = makeList<string>(['apple', 'banana', 'cherry'])
let enumeratedArray2 = makeList<number>([10, 50, 100])

console.log(enumeratedArray)
console.log(enumeratedArray2)

//

const returnTypes = <T, U>(arg1: T, arg2: U): string => {
    return `arg1: ${typeof arg1}, arg2: ${typeof arg2}`
}

let types = returnTypes<string, number>('hello', 10)
console.log(types)
