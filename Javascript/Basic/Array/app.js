const numbers=[40,23,50,21];

// const numbers2=new Array(1,2,3,4,5,6,7);

const langs=["Python,Java,C#,Javascript"];

const a=["Hello",22,null,undefined,3.14];

value=numbers.length;

value=numbers[0];
value=numbers[numbers.length-1];

// Data change
numbers[0]=15;

value=numbers;

// Index Of

value=numbers.indexOf(50);

// Assign value to end of array

numbers.push(555);

value=numbers;

// Assign value to begin of array

numbers.unshift(666);

value=numbers;

// Delete value to end of array

numbers.pop();

value=numbers;

// Delete value to begin of array

numbers.shift();

value=numbers;

// Deleting a specific part.

numbers.splice(0,1);

value=numbers;

// Reverse

numbers.reverse();

value=numbers;

// Sort

numbers.sort();

value=numbers;

//Func sort

value=numbers.sort(function(x,y){
    return x-y;
});

value=numbers.sort(function(x,y){
    return y-x;
});


console.log(value);