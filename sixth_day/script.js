// Window Object =>represeents an open window in a browser.it is browsers object(not javascripts) and is automatically created by browser.
// it is a global object with lots of properties and methods
// console.log(window);this will run in browser
// window.console.log("hello"); only known by browser(window) alert is also in the window methods

//what is DOM=>when web page is loaded the browser creates a document object model of the page

// the html code we write with attached javascript that all html code can be acessed in javascript(button ,paragraph etc)  accessed by as all html code when comes in javascript converts to object and this object is named as document and this document is available in window object so every page has window and in that window there is document which is model of html code which we can access this is dom
// window.document   //in the browser
//to see properties of this window document we do
// console.dir(window.document)
//console.log ->print object as element and treat dom elements specially so we use console.dir

// console.dir is used to print special object properties and methods we use console.dir to print objects
//dom look likes tree which has nodes and every node is object
//window is global so console.log(window.document) or console.log(document) both give same result that is code
//console.dir give properties and mthods

//where this information properties,methods and code is used given by dom these are used to make changes in html by the javascript
// for ex=>document.body.style.background="green";
// so to make dynamic changes or dynmaic manipulation we use DOM
