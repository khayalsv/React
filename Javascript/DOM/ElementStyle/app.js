const element= document.querySelector("#clear-todos");

// console.log(element.id);
// console.log(element.className);
// console.log(element.classList);
// console.log(element.classList[1]);
// console.log(element.textContent);
// console.log(element.innerHTML);
// console.log(element.href);


//console.log(element.style);


// Element change style

// element.className="btn btn-warning";
// element.style.color="#000";
// element.style.marginLeft="20px";
// element.href="https://www.google.com/";
// element.target="_blank";
// element.textContent="Silin";
//element.innerHTML="<span style='color:green'>Sil</span>";


// const elements=document.querySelectorAll(".list-group-item");
// elements.forEach(function(e){
//     e.style.color="red";
//     e.style.backgroud="#eee";
// });

let element2=document.querySelector("li:last-child");
element2=document.querySelector("li:nth-child(2)");
element2=document.querySelector("li:nth-child(3)");
element2=document.querySelector("li:nth-child(4)");
element2=document.querySelectorAll("li:nth-child(odd)");
element2=document.querySelectorAll("li:nth-child(even)");

element2.forEach(function(e){
    e.style.background="#ccc";
    e.style.color="red";
})

console.log(element2);