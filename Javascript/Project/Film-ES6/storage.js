class Storage{

    static addFilmToStorage=function(newFilm){
        let films=this.getFilmsFromStorage();
        
        films.push(newFilm);
        
        localStorage.setItem("films",JSON.stringify(films));
    }
     
    static getFilmsFromStorage = function(){
        let films;
    
        if(localStorage.getItem("films")===null){
            films=[];
        }
        else{
            films=JSON.parse(localStorage.getItem("films"));
        }
    
        return films;
    }
     
    static deleteFilmFromStorage=function(filmTitle){
        let films=this.getFilmsFromStorage();
    
        //splice
        films.forEach(function(film,index){
            if(film.title===filmTitle){
                films.splice(index,1); //1 denesin silir
            }
        });
    
        localStorage.setItem("films",JSON.stringify(films));
    }
     
     
     static clearAllFilmsFromStorage=function(){
         localStorage.removeItem("films");
     }
}