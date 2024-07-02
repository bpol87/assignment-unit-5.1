console.log('***** Object Practice *****')

// Add the required code to complete the tasks below

/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods'
*/
const me = {
  firstName: 'Ben' ,
  lastName: 'Pollack',
  hasSiblings: true ,
  shoeCount: 36,
  favThreeFoods: ['curry', 'lasagna', 'chocolate' ]
};
console.log('A little about me:', me);

/* 2. Accessing object properties.
  - Create a variable called fullName 
  - Use the firstName & lastName properties of the object you 
    created above to set its value. 
  - Console.log fullName
*/
let fullName1 = me['firstName'] + ' ' + me['lastName'];
let fullName2 = me.firstName + ' ' + me.lastName;
let fullName3 = `${me['firstName']} ${me['lastName']}`
console.log(fullName1);
console.log(fullName2);
console.log(fullName3);


/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food 
*/
let firstFavFood = me.favThreeFoods[0];
let lastFavFood1 = me.favThreeFoods[2];
let lastFavFood2 = me.favThreeFoods[(me.favThreeFoods.length - 1)];
console.log(firstFavFood);
console.log(lastFavFood1);
console.log(lastFavFood2);


/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count. 
*/
console.log('The original Shoe count was:', me.shoeCount);
me.shoeCount = me.shoeCount + 1;
console.log('The new shoe count is: ', me.shoeCount);


/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
me.favoriteColor = 'purple';

console.log(me);