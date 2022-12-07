let value;

value=document;
value=document.querySelectorAll("*");
value=document.querySelectorAll("*").length;
value=document.querySelectorAll("*")[0];
value=document.querySelectorAll("*")[6];
value=document.querySelectorAll("*")[document.querySelectorAll("*").length-1];
value=document.body;
value=document.head;
value=document.URL;
value=document.characterSet;

value=document.scripts;
value=document.scripts.length;
value=document.links;
value=document.links[document.links.length-1];
value=document.links[document.links.length-1].getAttribute("class");
value=document.links[document.links.length-1].getAttribute("href");
value=document.links[document.links.length-1].className;
value=document.links[document.links.length-1].classList;


// Forms

value=document.forms;
value=document.forms.length;
value=document.forms[0];
value=document.forms["form"];
value=document.forms[0].id;
value=document.forms[0].getAttribute("id");
value=document.forms[0].name;
value=document.forms[0].getAttribute("name");
value=document.forms[0].method;


console.log(value);


// const collections=Array.from(document.querySelectorAll("*"));

// collections.forEach(function(collections){
//     console.log(collections);
// });


