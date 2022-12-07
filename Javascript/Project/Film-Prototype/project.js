const form=document.getElementById("film-form");
const titleElement=document.querySelector("#title");
const directorElement=document.querySelector("#director");
const urlElement=document.querySelector("#url");
const secondCardBody=document.querySelectorAll(".card-body")[1];
const clear=document.getElementById("clear-films");

// UI begin
const ui=new UI();

// Storage
const storage=new Storage();

// All event add
eventListeners();

function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){ //OnInitialized
        let films =storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    secondCardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title=titleElement.value;
    const director=directorElement.value;
    const url=urlElement.value;

    if(title==="" || director==="" || url===""){
        ui.displayMessages("Fill them all...","danger")
    }
    else{
        //Add film
        const newFilm=new Film(title,director,url);

        //UI add film
        ui.addFilmToUI(newFilm);

        //Storage add film
        storage.addFilmToStorage(newFilm);

        ui.displayMessages("Added...","success");
    }

    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}


function deleteFilm(e){
    
    if(e.target.id==="delete-film"){

        //UI
        ui.deleteFilmFromUI(e.target);
        
        //Storage
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
 
 
        ui.displayMessages("Deleted...","success");
        //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
    }
}



function clearAllFilms(){
   if (confirm("Are you sure? ")) {
     ui.clearAllFilmsFromUI();
     storage.clearAllFilmsFromStorage();
   }
}

