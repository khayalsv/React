const filter=document.getElementById("filter");

// document.addEventListener("DOMContentLoaded",load);

// function load(e){
//     console.log("Page loaded");
// }


// filter.addEventListener("focus",run);
// filter.addEventListener("blur",run);

// function run(e){
//     console.log(e.type);
// }

filter.addEventListener("paste",run);
filter.addEventListener("copy",run);
filter.addEventListener("cut",run);
filter.addEventListener("select",run);


function run(e){
    console.log(e.type);
}