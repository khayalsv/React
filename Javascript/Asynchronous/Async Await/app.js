// async function test(data){
//     // return new Promise((resolve,reject)=>{
//     //     resolve(data);
//     // });
    
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("Bu deyerdir");
//         }, 3000);
//     });

//     let response=await promise; //3 saniye gozleyecek

//     return response;
// }

// //test("Hello").then(response=>console.log(response));
// test("hello").then(response=>console.log(response));



// async function testData(data){
//     let promise=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             if(typeof data==="string"){
//                 resolve(data);
//             }
//             else{
//                 reject(new Error("String deyer girin"))
//             }     
//         }, 3000);
//     });

//     const response=await promise;

//     return response;
// }

// testData(22)
// .then(data=>console.log(data))
// .catch(err=>console.error(err));


async function getCurrency(url){

    const response = await fetch(url); // Response object
    //console.log(response);

    const data=await response.json(); // Json object
    //console.log(data);

    return data;

}

getCurrency("https://jsonplaceholder.typicode.com/albums")
.then(res=>console.log(res))
.catch(err=>console.log(err));