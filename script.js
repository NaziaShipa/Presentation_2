'use strict';
/*
let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;
if(hasDriversLicense) console.log('I can drive : D');


//..............function......................
 function logger(){
    console.log("My name is Jonas");
 }


 logger();
 logger();
 logger();

 function fruitProcessor(apples, oranges){
    //console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} orange.`;
    return juice;
 }

 const appleJuice = fruitProcessor(5,0);
 console.log(appleJuice);
 console.log(fruitProcessor(5,0));

 const appleOrangeJuice =fruitProcessor(2,4);
 console.log(appleOrangeJuice);

 const num = Number('23');

 

 //.............Function Declarations vs Expressions.................

 function calAge1(birthYear){
    return 2037-birthYear;
 }

 const age1 = calAge1(1991);
 console.log(age1);

 //Function Expression
 const calAge2 = function(birthYear){
    return 2037-birthYear;
 }

const age2 = calAge2(1991);

console.log(age1,age2);


//..........................Arrow Function........
const calcAge3 = birthYeah => 2037 - birthYeah;
const age3 = calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYeah, firstName)=> {
    const age = 2037 - birthYeah;
    const retirement = 65 - age;
    //return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Jonas'));
console.log(yearsUntilRetirement(1980, 'Bob'));

 //..........................Fubctions Calling Other functions.............

 
 function cutFruitPieces(fruit){
   return fruit*4;
 }



function fruitProcessor(apples, oranges){
   //console.log(apples, oranges);
   const applePieces = cutFruitPieces(apples);
   const orangePieces = cutFruitPieces(oranges);

   const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
   return juice;
}

console.log(fruitProcessor(2,3));

 */

//-------------Arrays----------------------------------
/*
const friends = ['Asif', 'Anam', 'Shaon']
console.log(friends)
console.log(friends.length)
console.log(friends[friends.length-1])
friends[2] = 'Zoo'
console.log(friends)

const me = ['Asif', 'Anam', true, 24]
console.log(me)


function calcAge(birthyear){
    return 2023 - birthyear
}

const years = [1999,1998,2000,2020]
const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[years.length-1])

console.log(age1,age2,age3)
const ages = [age1, age2, age3]
console.log(ages)

 */
//------------Array methods -----------------------
/*
const friends = ['Asif', 'Anam', 'Shaon']
friends.push('Arman') //add new element at the end
friends.push('Zoo')
friends.push('Alex')
console.log(friends)

friends.unshift('Aldo') //add at the begining
console.log(friends)
const popped = friends.pop() // remove last element
console.log(popped)
const removeFirst = friends.shift() //remove first
console.log(removeFirst)
console.log(friends.indexOf('Anam')) //index where element is located
console.log(friends.indexOf('Aldo'))

console.log(friends.includes('Anam')) //includes(true or false)
console.log(friends.includes('Aldo'))

if(friends.includes('Zoo')){
    console.log('You have a friend named Zoo')
}
*/
//---------------Object---------------
/*
const anam = {
    firstName: 'Asif',
    lastName: 'Anam',
    age: 2023 - 1999,
    job: 'Software Engineer',
    friends: ['Hi', 'Hello', 'Bello']
}
console.log(anam)
console.log(anam.lastName)
console.log(anam['friends'])

const nameKey = 'Name'
console.log(anam['first' + nameKey])

// const interestedIn = prompt('What do you want to know?')
// if(anam[interestedIn]){
//     console.log(anam[interestedIn])
// }
// else {
//     console.log()
// }
anam.location = 'Bangladesh'
console.log(anam)
console.log(`${anam.firstName} has ${anam.friends.length} friends and the best friend is ${anam.friends[0]}`)

 */

// Object Methods
// const nameObj = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYeah;
//     return this.age;
//   },
//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${nameObj.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }
// };
// console.log(nameObj.calcAge());
// console.log(nameObj.age);
// console.log(nameObj.age);
// console.log(nameObj.age);

// /////////////////////////////////////
// // Iteration: The for Loop
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }

// ///////////////////////////////////////
// // Looping Arrays, Breaking and Continuing
// const jonas = [
//   'Jonas',
//   'Schmedtmann',
//   2037 - 1991,
//   'teacher',
//   ['Michael', 'Peter', 'Steven'],
//   true
// ];
// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   // Reading from jonas array
//   console.log(jonas[i], typeof jonas[i]);
//   // Filling types array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];
// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue  & break
// console.log('--- ONLY STRINGS ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== 'string') continue;
//   console.log(jonas[i], typeof jonas[i]);
// }
// console.log('--- BREAK WITH NUMBER ---')
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === 'number') break;
//   console.log(jonas[i], typeof jonas[i]);
// }

// ///////////////////////////////////////
// // Looping Backwards and Loops in Loops
// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
//   }
// }

// // The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
// }
// let rep = 1;
// while (rep <= 10) {
//   rep++;
// }
// let dice = Math.trunc(Math.random() * 6) + 1;
// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log('Loop is about to end...');
// }

