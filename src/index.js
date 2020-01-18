class Person {
  constructor(name,age){
    this.name = name
    this.age = age
  }
  eat(){
    alert(`${this.name} eat something`)
  }
  speak(){
    alert(`my name is ${this.name}, age ${this.age}`)
  }
}

class Student extends Person{
  constructor(name,age,number){
    super(name,age)
    this.number = number
  }
  study(){
    alert(`${this.name} study`)
  }
}

let zeng = new Student('zengzhi',10,'A1');
zeng.study()
alert(zeng.number)
zeng.eat()

let lu = new Student('longlu',11,'B1')
lu.study();
lu.speak();