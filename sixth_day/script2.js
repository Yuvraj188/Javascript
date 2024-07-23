// Both log() and dir() returns the string just as a string.

// Dom mANIPULATION
// 1=>sELECTING WITH ID and id is unique for for all elements different eleements different ids
//id represented by #
let vars = document.getElementById("heading"); //returns a reference to the first object with the specified value of the ID attribute.
console.log(vars); //run in the browser
//if we put wrong id which not exist then it will return null

//2=>Selecting with class==>multiple elements same class
//class represented by .className
//in id we use element but here we use elements
let headings = document.getElementsByClassName("hclass");
// Returns a HTMLCollection of the elements in the object on which the method was invoked (a document or an element) that have all the classes given by classNames. The classNames argument is interpreted as a space-separated list of classes.// assume it like array contain length,index etc
//if we put wrong classname which not exist then the length of the collection type will be 0 but returned a html collection
console.log(headings);
console.dir(headings);

//3rd method selecting /with tag
//suppose we want to acess all paragraph tags or all
let para = document.getElementsByTagName("p");
console.dir(para);
//returns html collection
//Retrieves a collection of objects based on the specified element name

//4th method
//above these there is another better method that is query selector

//for tags

//in query selector we can pass the id,class,tag
let elements = document.querySelector("p"); //returns first element that is first paragraph only
console.log(elements);
//but if we want all elements not only first element then we do it will return all paragraphs
let ele = document.querySelectorAll("p");
//query selector return node list and we know what node is in dom

//for class
let firclss = document.querySelector(".hclass");
console.log(firclss);
//. is necessary before class name in querySelector
let filss = document.querySelectorAll(".hclass");
console.log(filss);

//for id
let fid = document.querySelector("#heading"); //no sense of  querySelectorAll() here because id is unique
//we need to put #before the id name
// Returns the first element that is a descendant of node that matches selectors.
