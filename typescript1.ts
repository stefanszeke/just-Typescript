type Movie = string

const Movies: Movie[] = [ 'Star Wars', 'The Godfather', 'The Shawshank Redemption' ]
let foundMovie: Movie | undefined = Movies.find(movie => movie === 'The Godfather')

//

type coordinate = {x: number, y: number}
let coordinate1: coordinate = {x: 1, y: 2}
const getRandomCoordinate = (): coordinate => {
    return {x: Math.random(), y: Math.random()}
}

// 

type Engine = {engine: string, cylinders: number}
type Chassis = {body: string, color: string}
type Car = Engine & Chassis & {wheels: number}

let car1: Car = {engine: 'V8', cylinders: 8, body: 'sedan', color: 'red', wheels: 4}

//

let age: number | string = 30
age = '30'
age = 30

class MyNumbers {
    private numbers: number[] = []

    addNumber(num: number | string): void {
      if(!isNaN(+num)) {
        this.numbers.push(+num)
      }
    }

    addNumbersFromList(nums: (number | string)[] | string): void {
        if (typeof nums === 'string') {
            nums = nums.split(',').map(num => +num)
        }
        nums.forEach(num => this.addNumber(num))
    }

    getNumbers(): number[] {
        return this.numbers
    }
}

const myNumbers = new MyNumbers()
myNumbers.addNumber(1)
myNumbers.addNumber('2')
myNumbers.addNumber('dog')

myNumbers.addNumbersFromList([3, '4', 'cat'])
myNumbers.addNumbersFromList('5,6,car')

console.log(myNumbers.getNumbers())


let mood: 'happy' | 'sad' | 'angry' = 'happy'
mood = 'sad'

type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'

let day1: DaysOfWeek = 'Monday'

// difference typescript interface and type
// is that interface can be extended and type can't, but type can be used for union types
// interface can be used for object types and type can be used for primitive types

// extend
interface Person {
    name: string
    age: number
}

interface Developer extends Person {
    skills: string[]
}

// implements
interface Person {
    name: string
    age: number
}

class Developer implements Person {
    name: string
    age: number
    skills: string[]
      
      constructor(name: string, age: number, skills: string[]) {
          this.name = name
          this.age = age
          this.skills = skills
      } 
}

// union types, is a type that can be one of several types
type Human = Person | Developer

const human1: Human = {
    name: 'John',
    age: 30,
    skills: ['javascript', 'typescript']
}

// intersection types, is a type that combines several types
type Human2 = Person & Developer




