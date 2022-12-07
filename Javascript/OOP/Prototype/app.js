const object = new Object(); //Object Literal
object.name="Khayal";

//console.log(object);


function Employee(name,age){
    this.name=name;
    this.age=age;
   
    this.showInfo=function(){
        console.log("Information is displayed...");
    }

    this.toString = () => console.log("Employe obyektidir");
}


Employee.prototype.showInfos=function(){
    console.log("AD: "+this.name + " Yas: " + this.age);
}

const emp1=new Employee("Khayal",22);
const emp2=new Employee("Sadiq",20);

emp1.showInfo();
emp2.showInfo();
emp2.showInfos();
console.log(emp1);
console.log(emp2);

console.log(emp1.toString()); //class-da yazildigi ucun Object classinnan miras almaga ehtiyac olmur
