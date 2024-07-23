for (let i = 1; i < 5; i++) {
  console.log("hello", i);
}

// while(condition){
//
// }

// do{

// }while(condition)

// for-of loop//used for string,arrays etc
for (let val of "hello") {
  console.log(val);
}
//for-in loop//used for objects to return keys
let student = {
  name: "MAN",
  AGE: 34,
  SEX: "MALE",
};
for (let i in student) {
  console.log(i, "==", student[i]);
  console.log(i, "==", student.i);
}
// Why student.i gives undefined:

// When you write student.i, JavaScript looks for a property named i inside the student object. Since student does not have a property named i, it returns undefined.
// Instead, you should use student[i] because i is a variable that changes as the loop goes through each property. Using square brackets [] allows you to access the property name stored in i.
