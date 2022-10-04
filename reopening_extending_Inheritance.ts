// reopening interface
// why? because we can't change the interface after it's been defined
// so we can't add a new method to the interface
// but we can reopen the interface and add a new method
export {}
interface Vehicle {
    name: string,
    brand: string
}

interface Vehicle {
    toString(): string
}

class Car implements Vehicle {
    constructor(public name: string, public brand: string) {}

    toString(): string {
        return `${this.brand} ${this.name}`
    }
}

// extending interface

interface SuperCar extends Vehicle {
    speed: number
}

class MySuperCar implements SuperCar {
    constructor(public name: string, public brand: string, public speed: number) {}

    toString(): string {
        return `${this.brand} ${this.name} ${this.speed}`
    }
}

// multiple inheritance 
interface SUV extends Vehicle {
    fourWD: boolean
}

interface SuperSUV extends SUV, SuperCar {
    towCapacity: number
}

class MySuperSUV implements SuperSUV {
    constructor(public name: string, public brand: string, public speed: number, public fourWD: boolean, public towCapacity: number) {}

    toString(): string {
        return `${this.brand} ${this.name} ${this.speed} ${this.fourWD} ${this.towCapacity}`
    }
}

const myCar = new MySuperSUV('Civic', 'Honda', 200, true, 1000)