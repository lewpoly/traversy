// String

const name1 = 'Jeff';
const name2 = new String('Jeff');

// TODO: write this better
// WARN: escape with your life
// HACK:
// PERF: refactor this
// NOTE: 
// INFO:
// BUG: 
// FIXME: laksdflkasdf

console.log(name2);

console.log(typeof name2);

if (name1 === 'Jeff') {
  console.log('YES');
} else {
  console.log('NO');
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(typeof bool2);

// Functions
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2(1, 1));

// Object
const john = { name: 'John' };
const john2 = new Object({ name: 'John' });
console.log(john);
console.log(john2);

// Arrays
const arr1 = [1,2,3,4]
const arr2 = new Array(1,2,3,4)
console.log(arr1)
console.log(arr2)

// Regular Expression
const re1 = /\w+/;
const re2 = new RegExp('\\w+')
console.log(re1)
console.log(re2)
