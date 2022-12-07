console.log(2==2);
console.log("js"=="java");

console.log(2=="2");
console.log(2==="2");
console.log(2===2);

//Not
console.log(!(2==2))
console.log(!(2!=2))


//Ternary Operator

const number=120;

console.log(number===100? "Number 100" :"Not number 100")


if(number===100) console.log("Number 100");
else console.log("Not number 100");


//Switch

const process=3;

switch(process){
    case 1:
        console.log("Process 1");
        break;
    case 2:
        console.log("Process 2");
        break;
    case 3:
        console.log("Process 3");
        break;
    default:
        console.log("Invalid Process")
}