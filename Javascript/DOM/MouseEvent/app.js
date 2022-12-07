const cardBody=document.querySelectorAll(".card-body")[1];

const title=document.querySelector("#tasks-title");


// title.addEventListener("click",run);

// title.addEventListener("dblclick",run);

//title.addEventListener("mouseup",run);


title.addEventListener("mouseover",run);

title.addEventListener("mouseout",run);


// title.addEventListener("mouseenter",run);

// title.addEventListener("mouseleave",run);


function run(e){
    console.log(e.type);
}