'use strict';

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
