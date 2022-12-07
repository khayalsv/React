class Person{   // Base class
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    showInfo(){
        console.log("Ad: " + this.name + " Yas: " + this.age); 
    }
}


class Employee extends Person {  //Derived Class
    constructor(name,age,salary){
        // this.name=name;
        // this.age=age;
        // super.showInfo();
      
        super(name,age); //-base classda constructoru cagirir
        this.salary=salary;
    }

    showInfo(){  //Overriding
        console.log("Ad: " + this.name + " Yas: " + this.age + " Maas: " + this.salary); 
    }

    raiseSalary(amount){  //Extra methods
        this.salary+=amount;
    }
}

const emp=new Employee("Khayal",22,3000);
emp.raiseSalary(500);
emp.showInfo();

//console.log(emp);