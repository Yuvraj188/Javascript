// 1 method=>for forEach

let num = [2, 3, 4];
let sqr = (num) => {
  console.log(num * num);
};
num.forEach(sqr); //another way of call back

// 2 method => map method
//creates a new array with the results of some operation but the value its callback return are used to form a new array.
//arr.map(callbackfn(value,index,array))
let arr = [1, 2, 3, 4, 5];
let newArr = arr.map((val) => {
  return val * 2;
});
let nums = [1, 2, 3, 4, 5];
let cpyarry = nums.map((val) => {
  //returns a new array that is stored in cpyarry
  return val;
});
console.log(cpyarry);

//difference bw map and foreach
let numk = [2, 3, 4];
let sqrk = (num) => {
  return num * num;
};
let f = numk.forEach(sqr); //in f no array is stored llike map so this is difference
console.log(f);
// foreach use case=>when we want to print the values only
//map use case=>when we want to store the values in form of the array

// 3 method=> filter method
// creates a new array of elements that give true for a condition/filter . eg : all even elements

let nArr = [1, 2, 3, 4, 5, 6];
let evenArr = arr.filter((val) => {
  return val % 2 === 0;
});
console.log(evenArr);

//4 method Reduce method
//perform some operations and reduces the array tho a single value.it returns that single value
// for ex=>average,max et
let ary = [1, 2, 3, 4];
const sum = ary.reduce((result, val) => {
  return result + val;
});
console.log(sum);

// first result will contain 1 and val will contain 2 then they added and the result stored in the result and before last element the result will be stored in the result and return will work only 1 time at lastso  at last result will be returned;
//proof is that const cannnot be updated so only one time it it updated else return will update the result value
//prog to return the largest element of array
let a = [1, 2, 3, 4];
const big = a.reduce((result, val) => {
  return result > val ? result : val;
});
console.log(big);
