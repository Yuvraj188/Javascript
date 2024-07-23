let a = 45;
let b = 50;
let c = 55;
console.log(a > b && a > c);
console.log(c > a && c > b);
// similarly we use ||(or)
//also ! (logical not)

//conditional statements
if (a > b) {
  console.log("a is greater than b");
} else {
  console.log("b is greater than a ");
}

if (a > b) {
  console.log("a is greater than b");
} else if (c > a) {
  console.log("c isgreater than a");
}

let f = prompt("enter the number"); //give message and takes input from user like popup

//ternary operator
//condition?trueo/p:falseop;

//switch expression

switch ("hello") {
  case "hello":
    console.log("swithc work");
    break;
}
