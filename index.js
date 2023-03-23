var randomNumber1 = Math.floor(Math.random()*6+1);
switch (randomNumber1) {
    case 1:document.querySelectorAll("img")[0].setAttribute("src","images/dice1.png");
        break;
    case 2:document.querySelectorAll("img")[0].setAttribute("src","images/dice2.png");
        break;
    case 3:document.querySelectorAll("img")[0].setAttribute("src","images/dice3.png");
        break;
    case 4:document.querySelectorAll("img")[0].setAttribute("src","images/dice4.png");
        break;
    case 5:document.querySelectorAll("img")[0].setAttribute("src","images/dice5.png");
        break;
    
    default:document.querySelectorAll("img")[0].setAttribute("src","images/dice6.png");
        break;
}

var randomNumber2 = Math.floor(Math.random()*6+1);
switch (randomNumber2) {
    case 1:document.querySelectorAll("img")[1].setAttribute("src","images/dice1.png");
        break;
    case 2:document.querySelectorAll("img")[1].setAttribute("src","images/dice2.png");
        break;
    case 3:document.querySelectorAll("img")[1].setAttribute("src","images/dice3.png");
        break;
    case 4:document.querySelectorAll("img")[1].setAttribute("src","images/dice4.png");
        break;
    case 5:document.querySelectorAll("img")[1].setAttribute("src","images/dice5.png");
        break;
    
    default:document.querySelectorAll("img")[1].setAttribute("src","images/dice6.png");
        break;
}

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}
else{
    document.querySelector("h1").textContent="🚩It's a Tie!🚩";
}
