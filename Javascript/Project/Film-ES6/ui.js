class UI{
    static addFilmToUI=function(newFilm){
   
        const filmList=document.getElementById("films");
        
        filmList.innerHTML +=`
        
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
    //console.log(newFilm);
}

static clearInputs=function(element1,element2,element3){
    element1.value="";
    element2.value="";
    element3.value="";
}

static displayMessages=function(message,type){
    const firstCardBody=document.querySelectorAll(".card-body")[0]; 
    //Alert div
    
    const div=document.createElement("div");

    div.className=`alert alert-${type}`;
    div.textContent=message;

    firstCardBody.appendChild(div);

    setTimeout(function(){
        div.remove();
    }, 1000);
}

static loadAllFilms=function(films){
    const filmList=document.getElementById("films");

    films.forEach(function(film){
        filmList.innerHTML+= `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>`
        
    });
}

static deleteFilmFromUI=function(element){
    element.parentElement.parentElement.remove();
}

static clearAllFilmsFromUI=function(element){
    const filmList=document.getElementById("films");
    
    while(filmList.firstElementChild!==null){ //Child oldugu vaxtda
        filmList.firstElementChild.remove();
    }
}
}

