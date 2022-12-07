// Static methods

class Mathematic{
    
    static cube(x){
        console.log(x*x*x)
    }

    sqrt(x){
        console.log(x*x);
    }
}

// const math =new Mathematic();
// math.sqrt(3);
// console.log(math);

//static yazilmasa obyektinnen cagirilmalidir.
//static yazilsa prototyp-ne gonderilmediyi ucun classdan cagirilir

Mathematic.cube(3);