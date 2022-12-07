const githubForm=document.querySelector("#github-form");
const nameInput=document.querySelector("#githubname");
const clearLastUsers=document.querySelector("#clear-last-users");
const lastUsers=document.querySelector("#last-users");

const github=new Github();
const ui=new UI();

eventListeners();

function eventListeners(){
    githubForm.addEventListener("submit",getData);
    clearLastUsers.addEventListener("click",clearAllSearched);
    document.addEventListener("DOMContentLoaded",getAllSearched);
}

function getData(e){
    let username=nameInput.value.trim();
    
    if(username==="") alert("Please enter a name");
    else{
        github.getGithubData(username)
        .then(response=>{
            if(response.user.message==="Not Found") ui.showError("User not found")
            else{
                ui.addSearchedUserToUI(username);
                Storage.addSearchedUserToStorage(username);

                ui.showUserInfo(response.user);
                ui.showRepoInfo(response.repo);
            }
        })  
        .catch(err=>ui.showError(err));
    }

    ui.clearInput();
    e.preventDefault();
}


function clearAllSearched(){
    // All searched clean

    if(confirm("Are You Sure ?")){
        Storage.clearAllSearchedUsersFromStorage(); //delete from Storage
        ui.clearAllSearchedFromUI();
    }
}

function getAllSearched(){
    // Searched from Storage to UI add

    let users=Storage.getSearchedUserFromStorage();

    let result="";

    users.forEach(user=>{
        //<li class="list-group-item">asdaskdjkasjkşdjşasjd</li>
    
        result+=`<li class="list-group-item">${user}</li>`

        lastUsers.innerHTML=result;
    });
}

