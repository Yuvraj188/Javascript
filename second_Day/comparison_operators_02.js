// == equal to
// === equal to and check data type also
let a = 5;
let b = 5;
let c = 2;
console.log(a == b);
console.log(a != c);

//=== use of this
let d = 6;
let e = "6";

console.log("this is ==", d == e); //first convert string to number and then try to compare
console.log("this is ===", d === e); //so we use === to check datatype also
console.log("this is !==", d !== e);

//similary we has >=,>,<,<=
