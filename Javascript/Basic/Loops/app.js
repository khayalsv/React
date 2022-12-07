// While

let a=0;

while(a<10){
    
    console.log(a);
    
    a++;
}


let b=10;

while(b>0){

    console.log(b);

    b-=2;
}

//

console.clear();

//Break and Continue

let c=0;

while(c<10){

    console.log(c);
    
    if(c==5) break;
    
    c++;
}

console.clear();

let d=0;

while(d<10){

    if(d==3 || d==5){
        d++
        continue;
    }
    console.log(d);
    d++;
}

console.clear();


//Do While

let x=0;

do{
    console.log(x);
    x++;
}while(x<10);


console.clear();

//

const langs=["Python","Js","Java"];

let index1=0;

while(index1<langs.length){
    console.log(langs[index1]);
    index1++;
}
console.clear();

// For

for(let index2=0;index2<langs.length;index2++){
    console.log(langs[index2]);
}

console.clear();

// Foreach method

langs.forEach(function(lang){
    console.log(lang);
});

langs.forEach(function(lang,index){
    console.log(lang,index);
});


console.clear();


// React map

const users=[
    {name:"Khayal",age:22},
    {name:"Sadiq",age:21},
    {name:"Rasim",age:20}
];

const names=users.map(function(user){
    return user.name;
});

console.log(names);

console.clear();


//For in

const user={
    name:"Khayal",
    age:22
};

for(let key in user){
    console.log(key,user[key]);
}