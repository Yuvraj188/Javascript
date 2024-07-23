//arrrays=>collection of items
let heroes = ["ironman", "hello"];
let marks = [1, 2, 3, 4, 78];
console.log(typeof marks); //special tyype of object in which we use keys as index  so it is a key value pair so type is object
let arr = ["yuv", 12, "sfj"];
console.log(marks.length); //length is a property not method stored with array property stored with it byt method do a work
console.log(arr); //to print the array
console.log(arr[0]); //accessing value by index
//if accessing out of index value then undefined
console.log(marks[8]);
marks[3] = 88; //to change the value of array we can manipulate a array

//looping over an array
for (let i = 0; i < arr.length; i++) console.log(arr[i]);

//using for of loop
for (let val of arr) {
  console.log(val);
}

//methods for arrays=> two types of methods one which return new array and other which make change in the same array
//push()=> add to the end
//pop()= to delete from end
let a = [1, 2, 3, 4, 5, 6, 7];
a.push(5);
console.log(a);
console.log(a.pop()); //delete and return the deleted value

console.log(arr.toString()); //convert whole array into string and give result as as single string does not change original array but return a new string

let d = arr.concat(a, marks); //return new array by concating two arrays or multiple arrays here we concating 3 arrays
console.log(d);
//unshift():add to starting of array
//shift():delete from start and return
let k = [1, 2, 3, 4];
k.unshift("hello");
console.log(k);
k.shift(); //deleter and return the value also from start
console.log(k);

//slice() return a piece of array does not change original array and end does not include
console.log(k.slice(1, 3)); //can be used to create copy of the array

// splice():change original array (add,remove,replace)
// takes three parameters but last one is optional
let f = [1, 2, 3, 4, 5, 6, 7];
f.splice(2, 2, 101, 102); //deleted 3 and 4 becasue first parametes is 2 says start from the second index and next 2 specifies delete 2 eeleements so 3 and 4 deleted and last 2 parameter says replace that deleted by 101 and 102 last parameter is optional

console.log(f);
// f.splice(3, 1);//only deletes element
f.splice(3, 1, 101, 102); //only deletes element and can add multiple elements after that index
console.log(f);

f.splice(4, 0, 500); //delete no element just add 500 at 4th index
console.log(f);
