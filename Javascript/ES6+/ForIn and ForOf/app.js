const person ={
    name:"Khayal Salimov",
    age:22,
    salary:500
};

const langs=["Python","Java","C++","Php"];

const name="Khayal";

//For in

for(let prop in person){
    console.log(prop,person[prop]);
}

//Array 

for(let index in langs){
    console.log(index,langs[index]);
}

//String

for(let index in name){
    console.log(index,name[index]);
}

//Array

for(let value of langs){
    console.log(value);
}

//Object-de for of isledilmir