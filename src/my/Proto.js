const user = {
    showName() {
        console.log(this.name)
    }
}
//это объект-прототип, потому что на него у 2 др. объектов
// есть скртыая ссылка [[Prototype]]


const hanna = {
    name: 'Hanna'
    // [[Prototype]] : user
}

const alex = {
    name: 'Alex'
    // [[Prototype]] : user
}

hanna.__proto__ = user
alex.__proto__ = user

alex.showName()
hanna.showName()


//============================
function User(name) {
    this.name = name
}

const kate = new User('Kate')