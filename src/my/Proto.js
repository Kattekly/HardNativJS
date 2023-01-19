const user = {
    showName() {
        console.log(this.name)
    }
}

const hanna = {
    name: 'Hanna'
}

const alex = {
    name: 'Alex'
}

hanna.__proto__=user
alex.__proto__=user

alex.showName()
hanna.showName()