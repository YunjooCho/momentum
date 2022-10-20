const images = ["0","1","2","3","4","5"];
const backGroundindex = Math.floor(Math.random()*images.length);
const bgImage = document.createElement("img");


bgImage.src = `img/${backGroundindex}.jpg`;

document.body.style.backgroundImage = `url(${bgImage.src})`;
document.body.style.backgroundSize = `cover`;
document.body.style.maxHeight = `100%`;
document.body.style.minHeight = `100%`;

//document.body.appendChild(bgImage);

// if(backGroundindex >= 3){
//   document.getElementsByClassName().classList.remove("whiteFont");
//   document.getElementsByClassName().classList.remove("blackFont");
// }
