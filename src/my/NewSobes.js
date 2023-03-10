//Debounce
function debounce(callback, delay) {
    let id

    return (...arg) => {
        clearTimeout(id)
        id = setTimeout(() => {
            callback(...arg)
        }, delay)
    }
}

function randomFunction(text) {
    console.log('Heey!', text)
}

const debounced = debounce(randomFunction, 2000)
debounced("Kate")
debounced("Kate")
debounced("Kate")
debounced("Kate")

//
function debounceWithContecst(callback, delay) {
    let id

    return (...arg) => {
        clearTimeout(id)
        id = setTimeout(() => {
            return callback.apply(this, arg)
        }, delay)
    }
}

//Палиндром
function checkPalindrom(str) {
    return str === str.split('').reverse().join('');
}

const abc = 'test'
const dec = 'zez'

console.log(checkPalindrom(abc))
console.log(checkPalindrom(dec))

//Вывести индекс числа
const arr1 = [1, 2, 3, 6, 9]

function search(nums, target) {
  for(let i = 0 ; i< nums.length; i++) {
      if(nums[i] === target) return i
      if(nums[i] > target) return i
      if(i === nums.length - 1) return nums.length
  }
}

console.log(search(arr1, 5))