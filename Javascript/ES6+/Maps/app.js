// Maps - Key - Value (Dictionary)

let myMap=new Map(); // Created

//console.log(typeof myMap);

const key1 = "Khayal";

const key2 = {a:10,b:20};

const key3 = () => 2;

//Set

myMap.set(key1,"String deyer");
myMap.set(key2,"Object literal deyer");
myMap.set(key3,"Function deyer");

//Get

console.log(myMap.get(key1));
console.log(myMap.get(key2));
console.log(myMap.get(key3));

console.log(myMap);

console.log(myMap.size);


//

const cities=new Map();

cities.set("Sumgait",50);
cities.set("Baki",10);
cities.set("Gece",20);


//ForEach

cities.forEach(function(value,key){
    console.log(key,value);
});

//For of

for(let value of cities){
    console.log(value);
}

for(let [key,value] of cities){ //Destructing
    console.log(key,value);
}

//Map Keys

for(let key of cities.keys()){
    console.log(key);
}

//Map Values

for(let value of cities.values()){
    console.log(value);
}

// Arrays -> Map

const array=[["key1","value1"],["key2","value2"]];

const lastMap=new Map(array);

console.log(lastMap);

//

const array2=Array.from(cities);
//[["Sumgait",50],["Baki",10],["Gence",20]]
console.log(array2);