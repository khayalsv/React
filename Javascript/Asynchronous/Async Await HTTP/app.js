class Request {

    async get(url){
        const response=await fetch(url); // Response Object

        const data=await response.json(); //Json Object

        return data;
    }

    async post(url,data){
    
        const response = await fetch(url,{
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            }
        }); //Response Object

        const reponsedata = await response.json();  //Json Object

        return data;
    }


    async put(url,data){

        const response=await fetch(url,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            }
        }); //Response Object

        const reponsedata=await response.json();  //Json Object

        return reponsedata;
    }


    async delete(url){

        const response=await fetch('https://jsonplaceholder.typicode.com/albums/1', {
            method: 'DELETE',
        }); //Response Object
        

        return "Data silindi";
    }
}

const request=new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
// .then(albums => console.log(albums))
// .catch(err=>console.log(err));


// request.post("https://jsonplaceholder.typicode.com/albums",{userId:1,title:"K"})
// .then(newAlbum=>console.log(newAlbum))
// .catch(err=>console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/1",{userId:10,title:"Khayal"})
// .then(albums=>console.log(albums))
// .catch(err=>console.log(err));


// request.delete("https://jsonplaceholder.typicode.com/albums/1")
// .then(message=>console.log(message))
// .catch(err=>console.log(err));