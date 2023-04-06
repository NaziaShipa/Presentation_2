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