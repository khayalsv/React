// Element by Id

let element;

element=document.getElementById("todo-form");

element=document.getElementById("tasks-title")


// Element by Class

element=document.getElementsByClassName("list-group-item")[0];

element=document.getElementsByClassName("card-header");

// Element by Tag

element=document.getElementsByTagName("li");

element=document.getElementsByTagName("div");

// Query Selector

element=document.querySelector("#todo-form");

element=document.querySelector(".list-group-item");

element=document.querySelector("div");

// Query Selector All

element=document.querySelectorAll(".list-group-item")


console.log(element);


// element.forEach(function(e){
//     console.log(e);
// })