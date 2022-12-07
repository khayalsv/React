const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");


// All event add
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){ //OnInitialized
        let films =Storage.getFilmsFromStorage();
        UI.loadAllFilms(films);
    });

    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director==="" || url===""){
        UI.displayMessages("Fill them all...","danger")
    }
    else{
        //Add film
        const newFilm=new Film(title,director,url);

        //UI add film
        UI.addFilmToUI(newFilm);

        //Storage add film
        Storage.addFilmToStorage(newFilm);

        UI.displayMessages("Added...","success");
    }

    UI.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}


function deleteFilm(e){
    
    if(e.target.id==="delete-film"){

        //UI
        UI.deleteFilmFromUI(e.target);
        
        //Storage
        Storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
 
 
        UI.displayMessages("Deleted...","success");
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
}



function clearAllFilms(){
   if (confirm("Are you sure? ")) {
     UI.clearAllFilmsFromUI();
     Storage.clearAllFilmsFromStorage();
   }
}

