const filterInput=document.getElementById("filter");

// filterInput.onfocus=function(){
//     console.log("Salam");
// }

filterInput.addEventListener("focus",function(e){
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.target.placeholder);
    console.log(e.target.className);

    
    //console.log("Salam");
});

const todoform= document.getElementById("todo-form");
todoform.addEventListener("submit",submitForm);

function submitForm(e){
    console.log("SUBMIT EVENT");

    e.preventDefault();
}