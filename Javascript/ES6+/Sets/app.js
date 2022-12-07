//bir deyeri 1 defe saxliyir.

const myset=new Set();

myset.add(100);
myset.add(100);
myset.add(3.14);
myset.add("Khayal");
myset.add(true);
myset.add([1,2,3]);
myset.add({a:1,b:2});

console.log(myset);

const myset2=new Set([100,3.14,"Khayal"]);

console.log(myset2);

console.log(myset.size);

//Delete 

myset.delete("Khayal");

console.log(myset);

//Has method

console.log(myset.has(100));
console.log(myset.has(101));
console.log(myset.has([1,2,3])); //Referenc tip adresleri beraberlesdirmediyi ucun - False

//For of

for (let value of myset){
    console.log(value);
}

//

const array=Array.from(myset);

console.log(array);