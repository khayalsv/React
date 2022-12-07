//<a id = "clear-todos" class="btn btn-dark" href="#">Tüm Taskları Temizleyin</a>

// Create Element

const newLink=document.createElement("a");

newLink.id="clear-todos";
newLink.className="btn btn-danger";
newLink.href="https://www.google.com/";
newLink.target="_blank"

newLink.appendChild(document.createTextNode("Enter a different page"));

// const cardbody=document.getElementsByClassName("card-body")[1];
// cardbody.appendChild(newLink);

console.log(newLink);


// Delete Element

const todolist=document.querySelector("ul.list-group");
const todos=document.querySelectorAll("li.list-group-item");

// todos[2].remove();

//todolist.removeChild(todolist.lastElementChild);

todolist.removeChild(todos[1]);


console.log(todolist)


// Replace Element

//<h5 class="card-title" id = "tasks-title">Todolar</h5>


cardbody=document.querySelectorAll(".card-body")[1];

const newElement=document.createElement("h3");
newElement.className="card-title";
newElement.id="tasks-title";
newElement.textContent="New Todos";

// Old Element

const oldElement=document.querySelector("#tasks-title");

cardbody.replaceChild(newElement,oldElement);

console.log(newElement);