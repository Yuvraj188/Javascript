let str = "hello";
let s = "hello"; //by both ways we can declare a string
console.log(str.length); //to print the length of the string
console.log(str[4]); //we can acess by index also

//Template Literal=>type of special string in which we can write variables with the string
let sk = `This is a template literal ${str} with variables embedded ${
  1 + 2 + 4 + "5"
}`; //variables converted to string when printed but when printed by directly console.log they act as number and highlighted if seen in browser..
console.log(sk);

//escape characters
console.log("this is a escape \n gekki");
//   \t for used for tab and its length is 1 as it is 1 char

// methods for string
let stri = "hello";
stri.toUpperCase(); //strings immutable in js but in c++ mutable
console.log(stri);
console.log(stri.toUpperCase());
//no string method change original string it return a new string
//str.toLowerCase();
//str.trim()  //remove leading and trailing spaces
//str.slice(start,end)// return part of string and end index not included  and if only one argument passed it assumes it as starting and print till end
//str.concat(str2)//join str2 with str1 and returns a new string and we can concat by + also
// str.replace(SearchVal,newVal)//if multiple times matching found first time it will be replaced after that it will not replace
// str.replaceAll(searchval,replaceval);//replaces all the occurences
// str.charAt(idx)

// let a = prompt("entername");
