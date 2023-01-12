//создать промис, цепочку промисов
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 2000)
})


p.then(() => {
    //
}).then(() => {
    //
}).catch(() => {
    //
})

//замыкание
const a = 12

function b() {
    console.log(a)
}

//this в глобальном скоупе - глобальный объект
console.log(this === window) // вернет true

//дополнительные примеры
function fnA() {
    console.log(this); // window (не строгий режим)
}

function fnB() {
    'use strict';
    console.log(this); // undefined (строгий режим)
}

fnA();
fnB();

//пример исп. метода функции (call)
const obj = {
    name: 'Kate',
    getName: function () {
        return this.name
    }
}

const obj2 = {
    name: 'Kate'
}

console.log(obj.getName.call(obj2))

//как this работает в конструкторах

function Car (model) {
    this.model = model
}

const BMW = new Car() // пока не вызвали через нью это не конструктор, не экземпляр
// если без нью, то this будет undefined, в нестрогом режиме он превращается в ссылку на глобал. объект

//цепочка прототипов
//наследование классов, два класса, где один наследует от другого метод
//примеры работы зис