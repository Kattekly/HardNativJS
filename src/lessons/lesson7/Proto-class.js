class Animal {

    static defaultName = "Animal"

    constructor(name) {
        this.name = name || Animal.defaultName
    }

    walk() {
        console.log(`${this.name} walking`)
    }

    eat() {
        console.log(`${this.name} eating`)
    }

    sleep() {
        console.log(`${this.name} sleeping`)
    }
}

let dog = new Animal("dog")
dog.walk()
dog.eat()
dog.sleep()
let a = new Animal()
a.eat()

class Monkey extends Animal {

    roar() {
        console.log(`${this.name} roaring`)
    }

    climb() {
        console.log(`${this.name} climbing`)
    }
}

let monkey = new Monkey("Monkey")
monkey.climb()
monkey.roar()
monkey.eat()

class Human extends Monkey {
    speak() {
        console.log(`${this.name} speaking`)
    }

    think() {
        console.log(`${this.name} thinking`)
    }
}

let human = new Human("Human")
human.speak()
human.think()