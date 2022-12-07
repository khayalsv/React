//console.log(this); //Global Scope

// const emp1={ //Object literal
//     name:"Khayal",
//     age:22,
//     showInfo:function() {console.log("Information is displayed");}
// };

// const emp2={
//     name:"Sadiq",
//     age:20
// };

// emp1.salary=3000;
// emp1.showInfo();

// console.log(emp1);


////

// function Employee(){
//     this.name="Khayal";
// }

// const emp1=new Employee();
// const emp2=new Employee();

// console.log(emp1);
// console.log(emp2);


function Employee(name,age,salary){
    this.name=name;
    this.age=age;
    this.salary=salary;

    // this.showInfo=function(){
    //     console.log(this.name,this.age,this.salary);
    // }

    this.showInfo = () => console.log(this.name,this.age,this.salary);

    //console.log(this);
}

const emp1=new Employee("Khayal",22,500);
const emp2=new Employee("Sadiq",21,0);

emp1.showInfo();
emp2.showInfo();