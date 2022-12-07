function hello(){
    console.log("Hello");
}

hello();

//

function helloman(name,age){
    console.log(`"Name: ${name} Age: ${age}"`)
}

helloman("Khayal",22);

helloman("Sadiq");

//

function helloman2(name,age){

    if(typeof name==="undefined") name="Not information";

    if(typeof age==="undefined") age="Not information";

    console.log(`"Name: ${name} Age: ${age}"`)
}

helloman2("Khayal");


function helloman3(name="Not information",age="Not information"){

    console.log(`"Name: ${name} Age: ${age}"`)
}

helloman3("Khayal");

//

function square(x){
    return x*x;
}

function cube(x){
   return x*x*x;
}

let a=cube(square(2));

console.log(a);

//

function hello(){
    return "Salam"
}

console.log(hello());


// Funtion Expression

const salam=function(name){
    console.log("Salam "+ name);
}

salam("Khayal");

// Immediately Invoked Function Expression (IIFE)

(function(name)
{
    console.log("Hello: "+ name)
})("Khayal");

//

console.clear();

//

const database={
    host:"localhost",
    add:function(){
        console.log("Added");
    },
    get:function(){
        console.log("Obtain");
    },
    update:function(id){
        console.log(`Id: ${id} Updated`);
    },
    delete:function(id){
        console.log(`Id:${id} Deleted`);
    }
}

console.log(database.host);

database.add();

database.delete(10);