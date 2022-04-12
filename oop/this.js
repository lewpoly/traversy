// Constructor Function
// Must start with capital
// function Person(name, dob) {
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function () {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear()) - 1970;
//   };
// }

// Same function but as a Class Declaration
class Person {
  constructor(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function () {
      const diff = Date.now() - this.birthday.getTime();
      const ageDate = new Date(diff);
      return Math.abs(ageDate.getUTCFullYear()) - 1970;
    };
  }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

const lew = new Person('lew', '4-9-1986');
const brad = new Person('Brad', '9-10-1981');
console.log(brad.calculateAge());
console.log(lew.calculateAge());
