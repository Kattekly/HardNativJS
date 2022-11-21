import {log} from "util";

console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".

const prom = {
    getFile() {
        return new Promise((resolve, reject) => {
            console.log('Promise is created')
        })
    }
}
const promise = prom.getFile()
console.log(promise)

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const prom2 = {
    getFile() {
        return new Promise((resolve, reject) => {
            console.log('Promise is created')
            resolve('Promise Data')
        })
    }
}
const promise2 = prom2.getFile()
console.log(promise2)


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль

const prom3 = {
    getFile() {
        return new Promise((resolve, reject) => {
            reject('Promise Error')
        })
    }
}
const promise3 = prom3.getFile()
console.log(promise3)


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль

const prom4 = {
    getFile() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Promise Data')
            }, 3000)
        })
    }
}
const promise4 = prom4.getFile()
console.log(promise4)

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.


/*const handlePromise = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: () => console.log(`Promise is resolved with data: ${paramName}`),
    onError: () => console.log(`Promise is rejected with error: ${paramName}`)
}*/


// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.



const name = {
    getFile() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('My name is')
            }, 1000)
        })
    }
}
const promise5 = name.getFile()
console.log(promise5)

function onSuccess (name: string) {
    return name
}

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}


const pr1 = new Promise((res => {setTimeout(() => {res({ name: "Anna" })}, 2000)}))
const pr2 = new Promise((res => {setTimeout(() => {res({age: 16})}, 3000)}))
const pr3 = new Promise((res => {setTimeout(() => {res({city: ''})}, 4000)}))


const promise6 = Promise.all([pr1, pr2, pr3])
console.log(promise6)


// just a plug
export default () => {
};