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
console.log(this === window)

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

//пример исп. метода функции
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