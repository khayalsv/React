const obj= {
    test1:function(){
        console.log("Test 1");
    },
    test2:function(){
        console.log("Test 2");
    }
}

//console.log(obj);

const emp=Object.create(obj);
emp.name="Khayal";
emp.age=22;
console.log(emp);


////////////////////////////////////////

function Person(){

}

Person.prototype.test1=function(){
    console.log("Test 1");
}

Person.prototype.test2=function(){
    console.log("Test 2");
}

function Employee(name,age){
    this.name=name;
    this.age=age;
}

Employee.prototype=Object.create(Person.prototype); // Miras kimi
Employee.prototype.myTest=function(){
    console.log("Mytest");
}

const emp2=new Employee("Sadiq",21);

console.log(emp2);

//emp2.test1();