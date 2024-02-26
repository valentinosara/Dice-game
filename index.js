var randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[0].setAttribute("src", "./images/dice" + randomNumber1 + ".png")
"./images/dice6.png";

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelectorAll("img")[1].setAttribute("src", "./images/dice" + randomNumber2 + ".png")
"./images/dice6.png";

const isFirstVisit = !sessionStorage.getItem('visitedBefore');

if (isFirstVisit) {
    // Es la primera vez en esta sesión, muestra el mensaje introductorio y marca la visita
    document.querySelector("h1").textContent = "¡Welcome! To play refresh the website.";
    
    // Marca la visita en sessionStorage
    sessionStorage.setItem('visitedBefore', 'true');
} else {
    // No es la primera vez, realiza el juego de dados como de costumbre


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player One Wins!"
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player Two Wins!"
}
else{
    document.querySelector("h1").textContent = "Draw!"
}
}