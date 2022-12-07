// function Employee(name,age,salary){
//     this.name=name;
//     this.age=age;
//     this.salary=salary;
// }

// Employee.prototype.showInfo=function(){
//     console.log("Ad: " + this.name + " Yas: " + this.age + " Maas: " + this.salary);
// }

// const emp=new Employee("Khayal",22,500);

// console.log(emp);

class Employee{
   
    constructor(name,age,salary){
        this.name=name;
        this.age=age;
        this.salary=salary;
    }

    showInfo(){
       console.log("Ad: " + this.name + " Yas: " + this.age + " Maas: " + this.salary); 
    }
}

const emp=new Employee("Khayal",22,500);

// console.log(emp);

emp.showInfo();