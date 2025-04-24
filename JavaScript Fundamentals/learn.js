// console.log(200+25);

// console.log(`this is a sum: ${20+30}`);

// --- variables: let and const ------

let num1, num2;

num1 = 15;
num2 = 20;

// console.log(num1+num2);

let name1, name2;
const constantName = "hello world";

name1 = 'rohit';
name2 = 'singh';

// console.log(name1+name2)
// console.log((name1+name2).length);
// console.log(`user's first name is ${name1} and last ${name2}`);


// constantName = "bisht";  // can not change a constant variable

// console.log(constantName);  

// ------ prompt (take input) and conditions--------

// let y=10
// let x;

// x = Number(prompt("type a number: "));
// console.log(x)

// if (x < y){
//     console.log(`yehh! number ${x} is less than ${y}`)
// } else if (x === y) {
//     console.log(`your number ${x} is equal to ${y}`)
// } else{
//     console.log(`${x} is greater than ${y}`)
// };


// -------oprators => && (and), || (or), ! (not)--------

// let a = "20";
// let b = 4;

// if (a<b && typeof(a) == typeof(b)){
//     console.log(`yehh! number ${a} is less than ${b} and their type is same`)
// } else if (a<b && typeof(a) != typeof(b)){
//     console.log(`number ${a} is less than ${b} but their type is not same`)
// } else if (a === b || a > b) {
//     console.log(`your number ${a} is greater (or equal) than ${b}`)
// } else{
//     console.log(`i don't know the answer`)
// };

// ------- array --------

let colors = ["red", "blue", "green", "black"];  // length = 4
console.log(colors) // colors.indexOf("gr") => result -1 means not present

colors[3] = "white"
// console.log(colors)

colors[colors.length] = "orange"    // add new element
// console.log(colors)

// colors[8] = "brown"
// console.log(colors, `length of list: ${colors.length}`) // length = 9, added 3 empty string then a new element

list_comb = colors.join("=")
// console.log(list_comb)

colors.push("yellow")   // add to end
// console.log(colors)

colors.unshift("indigo")    // add to start
console.log(colors)

let colorSlice = colors.slice(2, 4); // start from index 2 but not include index 4
console.log(colorSlice)

colors.splice(4,2)  // means delete 2 elements from index 4. ['indigo', 'red', 'blue', 'green', 'white',  'orange', 'yellow']
// console.log(colors) // [ 'indigo', 'red', 'blue', 'green', 'yellow' ]=> white and orange removed

colors.splice(4,0,"add-white-orange")   // remove nothing(0), but at index 4 add 'something'
// console.log(colors) // [ 'indigo', 'red', 'blue', 'green', 'add-white-orange', 'yellow' ]

colors.splice(2,0,"yellow-red", "green-black")   // remove nothing(0), but at index 2 add 'something',.... 
console.log(colors) // [ 'indigo', 'red', 'yellow-red', 'green-black', 'blue', 'green', 'add-white-orange', 'yellow' ]

let score = [1, 3, 25, 100, -12, 34, 100, 7, 19];
// console.log(score.sort()) // [-12, 1, 100, 100, 19,25, 3, 34, 7] `