// Resolve

// function getData(data){  //Promise object qaytarir
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             resolve("Positive result")
//         }, 3000);
//     });
// }

// getData("Hello").then(function(response){
//     console.log(response);
// });



// Reject

// function getData(data){  //Promise object qaytarir
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
//             reject("Negative result")
//         }, 3000);
//     });
// }

// getData("Hello").catch(function(response){
//     console.log(response);
// });



// Resolve && Reject

// function getData(data){  //Promise object qaytarir
//     return new Promise(function(resolve,reject){
//         setTimeout(() => {
          
//             if(typeof data==="string")
//             {
//                 resolve(data);
//             }
//             else
//             {
//                 reject(new Error("String deyer yazin"))
//             }
//         }, 3000);
//     });
// }

// getData(2)
// .then(response => console.log("Gelen deyer "+ response))
// .catch(err =>  console.error(err));



function addTwo(number){

    return new Promise(function(resolve,reject){
        setTimeout(() => {
            
            if(typeof number==="number")
            {
                resolve(number+2);
            }
            else
            {
                reject(new Error("Eded deyer yazin"))
            }
        }, 3000);
    });

}

addTwo(10)
.then(response => {
    console.log(response);
    return response + 2;
})
.then(response2=>console.log(response2))
.catch(err =>  console.error(err));


//1 catch && 1den cox then - Promise Chain