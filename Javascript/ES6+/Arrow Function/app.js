// const hello=function(){
//     console.log("Hello");
// }

// hello();


// Arrow Function

const hello=()=>{
    console.log("Hello");
}

hello();

//

const hello2=(firstName,lastName)=>{
    console.log("Hello",firstName,lastName);
}

hello2("Khayal","Salimov");

//

const hello3=firstName=>console.log("Hello",firstName);

hello3("Sadiq");

//

const hello4 = (firstName,lastName) => console.log("Hello",firstName,lastName);

hello4("Sadiq","Ilyasli");

//

const cube = x => x*x*x;

console.log(cube(4));