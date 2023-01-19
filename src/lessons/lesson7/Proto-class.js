class Animal {
    constructor(name) {
        this.name = name || "Animal"
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