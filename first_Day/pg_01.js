console.log("hello");
age = 34;
x = null; //we know
y = undefined; //dont know what does it have
isFollow = true; //boolean values

// it is dynamically typed progg. lang. we can store anything in any variable dont have types

//variable rule=>only first letter should be letter or underscore. and other letters can be letter digits _ or $.
//fullName ===>>use camel case for variables

// we should never declare variables like above in js we have to use var,let,const.

// var=>variable can be redeclared and updated.global scope variable
//dont use var
var age = 45;
var age = 56; //can be redeclared
// let=>cannot be redeclared but updated.block scope variable
//const=>variable cannot be redeclared or updated.block scope variable

//let a;  //only declared then type will be undefined or if we print a then undefined

//const b;//will give error we should give const a value when declared

{}//this is block
// all variable are undefined if they have no value

//data types in javascript accessed by typeof a;
//  primitive datatypes=> number,string,boolean,undefined,null,BigInt,Symbol
//non primitive=>objects(multiple values for ex- name,rollno,marks generally object has key value pairs)

//declare objects by const
// for example
const student={
    fullName:"rahul",
    age:45,
    cgpa:5,
    ispass:true
};

// student is object collection of different variable

console.log(student.age)
// or 
console.log(student["age"])//use ""

//we can change the constant object keys
student.age=student.age+1;


"123"+123 wiill equal to "123123"

const profile{

}