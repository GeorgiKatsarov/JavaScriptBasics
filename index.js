//day 1 of learning js, it shouldnt be so hard since i can already code in c# and python
//hello world 
console.log("Hello, world");
//variables
let name; //undefined
console.log(name);

let fullName = "Georgi Katsarov"; //declaring a string
console.log(fullName);

let intrestRate = 0.3; //declaring a double
console.log(intrestRate);
intrestRate = 1; //changing the value
console.log(intrestRate);

const intresRate2 = 0.5;
console.log(intresRate2);
// intresRate2 = 3; if we try to change the value we get an error

//primative types of types (i know it sounds funny)
let string1 = 'string'; //string literal
let age = 17 // number literal
let undefined1 = undefined; // undefined
let isApproved = true; //boolean literal
let nullValue = null; //null literal

// remember that js is a dynamic language and you can asign the variables values of a different from the original type
console.log(typeof(string1));
string1 = 12;
console.log(typeof(string1));

//refference types - objects, arrays and functions
//objects - stores multipul values in one object, like a container
let person = {
    name: 'Georgi Katsarov',
    age: 17
}; //declaring an objec with 2 key value pairs
console.log(person);
//dot notation for changing values
person.name = 'Georgi'
person.age = 18;
console.log('He is ' + person.age + ' his name is ' + person.name); //using + concatination and dot notation to get the values of the object
//bracket notation
person['name'] = 'Georgi Katsarov';
let selection = 'age';
person[selection] = 17; //passing a variable as a parameter
console.log(person);
//arrays - it stores a list of one or more values of same or different valuetypes
let selectedColours = []; //inicalizing an empty array
selectedColours = ['red', 'green', 'bluer'];// a way of filling arrays
console.log(selectedColours[0], selectedColours[1], selectedColours[2]); // indexing the array
console.log(selectedColours.length); //shows the number of items in the array
//functions
//void functions
function greet() {
 console.log('Hello, this is my first function');
} //declaring a function, this one does not take parameters
greet(); //using the function
function greet2(name){
    console.log('Hello ' + name + '!');
} // declaring a function that takes parameters
greet2('Georgi');
//return fuctions (they can return any type)
function squere(number){
    return number*number;
} //declaring a return function
console.log(squere(4));
console.log(squere(50));

