import {reverse} from "dns";

console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


//пример замыкани
const c = 10

function b() {
    console.log(c)
}

b()

//1 Создайте замыкание: функция makePassword получает пароль в аргументе и возвращает внутреннюю функцию, которая принимает введенную строку и возвращает булево значение true, если введенная строка совпадает с паролем и faulse – если не слвпадает.
function makePassword(password) {
    return function proverka (tryPassword){
        return (tryPassword === password);
};
}
let my = makePassword("ni12")
console.log('password'+ ' ' + my('ni12'))
console.log('password'+ ' ' + my('78g'))


//2 Создайте замыкание: функция addition получает число n и возвращает внутреннюю функцию. Эта функция также получает число, прибавляет его к n и возвращает результат.

function addition(n) {
    return function sum (m) {
        return n+m
    };
}

let dec = addition(2)
console.log(dec(1))
console.log(dec(9))


//3
function sum(a) {
return function sum2 (b) {
    return a+b
}
}
sum(2)(4)
// Task 01
// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9


// Task 02
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

// Task 03
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;

// Task 04*
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
// 1) superSum(0) //0
// 2) superSum(3)(2)(5)(3) //10
// 3) superSum(3)(2)(5,3) //10
// 4) superSum(3)(2,5,3) //10
// 5) superSum(3)(2,5)(3) //10
// 6) superSum(3)(2,5)(3,9) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

// Task 05
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

//Задача 1
function sumTo(n: number) {
let sum = 0
    for(let i = 0; i<= n; i++) {
        sum +=i
    }
    return sum
}

function sumTo2(n: number): number {
    if (n == 1) {
        return n
    }
    else {
        return n + sumTo2(n-1)
    }
}

console.log(sumTo2(100))


function sumTo3(n: number){
 return n * (n + 1)/2
}

console.log(sumTo3(100))


//Задача 2
function factorial(n: number): number {
    if (n == 1) {
        return n
    }
    else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5))


//Задача 3
function fib(n: number): number {
    if (n <=1) {
        return n
    }
    return fib(n-1) + fib(n-2)
}

console.log(fib(7))


//
function fib2(n: number): number {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

//Задача 4

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}
function printList(list: any) {
   let a = list
    while (a) {
        alert(a.value)
       a = a.next
    }
}

printList(list)
// for (let i=1; i<list.length; i++) {
//     return list[i]
// }

function printList2(list: any): any {
    alert(list.value)
    if (list.next)
   return printList2(list.next)
}
printList2(list)


//Задача 5
function printList3(list: any) {
    let a = list
    let b = []
    while (a) {
        b.push(a.value)
        a = a.next
    }
    for (let i = b.length-1; i>=0; i--)
        alert(b[i])
}
printList3(list)


function printList4(list: any): any {
    if (list.next)
        printList4(list.next)
    alert(list.value)
}

printList4(list)

// Task 06
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.

function flatAll(array: any): any {
    return array.reduce((acc: any, current: any) => {
        if(Array.isArray(current)) return acc.concat(flatAll(current))
        return [...acc, current]
    }, [])
}
let a = [1,2,3,[4,5,[6,7]]]
console.log(flatAll(a))




// just a plug
export default () => {};