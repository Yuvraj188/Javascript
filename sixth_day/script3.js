//now this is all about acessing now how to get and manipulate so we learn properties
// by these properties we can get,set and update the values

// 1)tagName=>returns tag for element nodes

let fid = document.querySelector("#heading");
console.log(fid.tagName);

// 2)innerText :returns the text content of the element and all its children
//suppose div is parent and h1 and p are its childrens
//then text of all the childrens will also returned
let did = document.querySelector("#mc");
console.log(did.innerText);
//we can also change it
did.innerText = "ehllo"; //this will change all the inner text old will be lost

// 3) innerHTML=>returns the plain text or html contents in the element
console.log(did.innerHTML);

did.innerHTML = "<div>new div </div>"; //this will replace all old innerHTML code with this

// 4) textContent:returns textual content even for hidden elements
//some elements has visibility:hidden which we can see by this.these elements cannot be seen by innerText it will return ''  this

//we use under properties for navigation to know what is after the elment etc.
did.firstChild;
dif.lastChild;
did.children; //will return a html collection of all the children it have

//when we create a dom tree it has generalyy 3 nodes
// 1=>text Node
// 2=>comment Node
// 3=>elements nodes
//but we focus only on element nodes so when we print body first child it will print text sometimes rather than the element node(div,p,h1 etc.)

//homework=>create a h2 heading element with text-"hello javascript ". append "from apna college students" to this using js

let vk = document.querySelector("#hw");
vb.innerText = vb.innerText + "from apna colllege";

// create 3 div with common class name -"box".acess them and add some unique text to each of them
let dd = document.querySelectorAll(".hws");
// dd[0].innerHTML = "hello";
// dd[1].innerHTML = "one";
// dd[2].innerHTML = "5one";
for (d of dd) {
  d.innerText = prompt("enter");
}
