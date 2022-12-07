function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.showInfo=function(){
    console.log("Ad: " + this.name + " Yas: " + this.age);
}

// const person=new Person("Khayal",22);
// console.log(person);

function Employee(name,age,salary){
    Person.call(this,name,age)
    this.salary=salary;
}

Employee.prototype=Object.create(Person.prototype);

const emp = new Employee("Khayal",22,500);

emp.showInfo();