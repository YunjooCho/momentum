const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.querySelector("#loginForm");
const inputUserNickName = document.querySelector("#userNickName");
const greeting = document.querySelector("#greeting");

function saveUserNickName(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const userNickName = inputUserNickName.value;
    localStorage.setItem(USERNAME_KEY, userNickName);
    openGreetingsView(userNickName);
}


function openGreetingsView(userNickName){
    greeting.innerText=`Welcome ${userNickName}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const currentUserNickName = localStorage.getItem(USERNAME_KEY)

if(currentUserNickName === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",saveUserNickName);
} else {
    openGreetingsView(currentUserNickName);
}