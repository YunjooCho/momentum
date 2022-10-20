const clockView = document.querySelector("#clock");

function getTime(){
    const now = new Date();
    const hours = String(now.getHours()).padStart(2,"0");
    const minutes = String(now.getMinutes()).padStart(2,"0");
    const seconds = String(now.getSeconds()).padStart(2,"0");
    clockView.innerText = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime,1000);