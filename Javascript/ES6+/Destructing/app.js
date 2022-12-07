// let number1,number2;

// arr=[100,200,300,400];

// number1=arr[0];
// number2=arr[1];

// console.log(number1,number2);


//Destructing

arr=[100,200,300,400];

const [number1,number2]=arr;

console.log(number1,number2);

//

const numbers={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
};

const {a:num1,b,d}=numbers;

console.log(num1,b,d);

//Func Destructing

const getLangs = () => ["Python","Java","C++"];

const[lang1,lang2,lang3]=getLangs();

console.log(lang1,lang2,lang3);


//Object

const person={
    name:"Khayal",
    age:22,
    salary:500,
    showInfos:() => console.log ("Information sending...")
}

const{name,age,salary,showInfos}=person;
console.log(name,age,salary);

showInfos();

