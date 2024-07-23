//function=>block of code that perfroms specific task and can be invoked when needed

function hello() {
  console.log("hello");
}
hello();

function sum(a, b) {
  //a and b are local variable to this function block socpe
  //fn with parameterj
  console.log(a + b);
  return a + b;
}
console.log(sum(7, 9)); //passing argument

// Arrow function===> compact way of writing a function and we can store functions in a variable
const hell = () => console.log("jello"); //if single line of code no need to put curly braces

const arrowSum = (a, b) => {
  console.log(a + b);
}; //this function can be accessed by the variable it is stored and definition can be seen on the browser by variable name
arrowSum(4, 5);

const arrowmul = (a, b) => {
  return a * b;
};
console.log(arrowmul(4, 5));

//generally prefer arrow function for small amount of work in less no. of lines of code

//if a function is associated with a object than it is method

//in javascript fn can be passed as agruments also
//callback is a fn passed as an argument to another function

// lets see example
let arr = [1, 2, 3, 4, 5];
arr.forEach(function printVal(val) {
  //for each will put each value of arr into val and pass to the functionj
  console.log(val);
});
//generally we use arrow function for this
arr.forEach((val) => {
  console.log(val);
});
//for forEach callback fn we have 3 optional parameters vlaue,index,array which we cans use
arr.forEach((val, idx, arr) => {
  //print index
  console.log(val, idx, arr);
});
//forEach onlyl used for the arrays not used for the strings

//Interview question==> Higher Order Methods/Functions=>which take other fn as parameter or return a function and foreach is HOM

let num = [2, 3, 4];
let sqr = (num) => {
  console.log(num * num);
};
num.forEach(sqr); //another way of call back
