// function getTextFile(){

//     fetch("example.txt")
//     .then(response=>response.text())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));
// }

// getTextFile();

// function getJsonFile(){  //local get json
//     fetch("example.json")
//     .then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.error(err));
// }

// getJsonFile();


// function getExternalApi(){
//     fetch("http://worldtimeapi.org/api/timezone/Asia/Baku")
//     .then(response=>response.json())
//     .then(data=>console.log(data))
//     .catch(err=>console.log(err));
// }

// getExternalApi();


function getExternalApi2(){
    fetch("http://worldtimeapi.org/api/timezone/Asia/Baku")
    .then(response=>response.json())
    .then(data=>{
        console.log(data.timezone);
    })
    .catch(err=>console.log(err));
}

getExternalApi2();