class Storage{
    static getSearchedUserFromStorage(){
        //get

        let users;

        if(localStorage.getItem("searched")===null){
            users=[];
        }
        else{
            users=JSON.parse(localStorage.getItem("searched"));
        }
        return users;
    }

    static addSearchedUserToStorage(username){
        //add

        let users=this.getSearchedUserFromStorage();
        
        if(users.indexOf(username)===-1){
            users.push(username);
        }
        
        localStorage.setItem("searched",JSON.stringify(users));
    }

    static clearAllSearchedUsersFromStorage(){
        //all clean

        localStorage.removeItem("searched");
    }
}