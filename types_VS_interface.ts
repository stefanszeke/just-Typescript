export {}
// differences types vs interface

// interface can be extended, type can't
interface Person {
    name: string
    age: number
}

interface Developer extends Person {
    skills: string[]
}

interface Developer {
    salary: number
}
 
type Car = {
    name: string
    brand: string
}

// type Car = {
//     speed: number
// }

type SuperCar = Car & {
    speed: number
}


// interface can be used for union types, type can't
type Human = Person | Developer
type daysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday'
