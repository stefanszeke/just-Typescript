export {}

interface IHelper {
  sayHi(person: Human): string;
}

class HelperClass implements IHelper {

  public sayHi(person: Human): string  {
    let introduction: string = `Hello, my name is ${person.name}`
  
    if (person.nickname) { introduction += `, but You can call me ${person.nickname}.` }
  
    if (person.age && person.nickname) { introduction += ` And I am ${person.age} years old.` }
    else if(person.age && !person.nickname) { introduction += ` and I am ${person.age} years old.` }
  
  
    if(!person.age && !person.nickname) { introduction += `.` }
    return introduction
  }

}

class MockHelperClass implements IHelper {
  
    public sayHi(person: Human): string  {
      return `[not implemented yet]`
    }
  
}



interface Human {
    name: string;
    age?: number;
    nickname?: string;
    sayHi(person: Human): string;
}


class Person implements Human {
  name: string;
  age?: number;
  nickname?: string;

  constructor(name: string, private helper: IHelper) {
    this.name = name
  }

  sayHi(): string {
    return this.helper.sayHi(this)
  }

  setNickname(nickname: string) {
    this.nickname = nickname
    return this
  }

  setAge(age: number) {
    this.age = age
    return this
  }

}

const Jill:Person = new Person('Jill', new HelperClass())

const Jack:Person = new Person('Jack', new HelperClass())
.setAge(29)

const George:Person = new Person('George', new HelperClass())
.setNickname('BigG')

const John:Person = new Person('John', new HelperClass())
.setNickname('Johnny')
.setAge(30)

const Mary:Person = new Person('Mary', new MockHelperClass())
.setAge(31)

console.log(Jill.sayHi())
console.log(Jack.sayHi())
console.log(George.sayHi())
console.log(John.sayHi())
console.log(Mary.sayHi())



