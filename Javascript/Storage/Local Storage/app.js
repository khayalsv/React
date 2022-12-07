// localStorage.setItem("hereket","test");
// localStorage.setItem("tekrar",30);

// const value=localStorage.getItem("tekrar");
// console.log(value);

// //localStorage.clear();

// //

// if(localStorage.getItem("sport")===null){
//     console.log("Data yoxdu");
// }
// else{
//     console.log("Data var");
// }


// //Array

// const todos=["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todos",JSON.stringify(todos));

// const value2=JSON.parse(localStorage.getItem("todos"));
// console.log(value2);

// //

const form=document.getElementById("todo-form");
const todoinput=document.getElementById("todo");

form.addEventListener("submit",addTodo);

function addTodo(e){
    
    const value3=todoinput.value;

    let todos2;
    if(localStorage.getItem("todos2")===null){
        todos2=[];
    }
    else{
        todos2=JSON.parse(localStorage.getItem("todos2"));
    }

    todos2.push(value3);

    localStorage.setItem("todos2",JSON.stringify(todos2));


    e.preventDefault();
}