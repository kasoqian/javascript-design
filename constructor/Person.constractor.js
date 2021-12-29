class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  sayHi() {
    console.log(`${this.name} say hi to you, his age is ${this.age}`)
  }
}

export default Person
