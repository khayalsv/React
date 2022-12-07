let value;

const todolist=document.querySelector(".list-group");
const todo=document.querySelector(".list-group-item:nth-child(2)");
const cardrow=document.querySelector(".card.row");

value=todolist;
value=todo;
value=cardrow;

// Child Nodes - in Text

value=todolist.childNodes;
value=todolist.childNodes[0];

// Children - Element

value=todolist.children;
value=todolist.children[2];
value=todolist.children[todolist.children.length-1];
value=todolist.children[2].textContent="Changed";


value=cardrow;
value=cardrow.children;
value=cardrow.children[0];
value=cardrow.children[2].children[1].textContent="This is Changed";


value=todolist;
value=todolist.firstElementChild;
value=todolist.lastElementChild;
value=todolist.children.length;
value=todolist.childElementCount;


value=cardrow;

value=cardrow.parentElement;
value=cardrow.parentElement.parentElement;

value=todo;
value=todo.previousElementSibling;
value=todo.nextElementSibling;
value=todo.nextElementSibling.nextElementSibling;


console.log(value);