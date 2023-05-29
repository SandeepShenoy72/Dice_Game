const randomNumber1 = Math.floor(Math.random()*6)+1
const diceNumber1 = "images/dice"+randomNumber1+".png"

document.querySelector(".img1").setAttribute("src",diceNumber1);

const randomNumber2 = Math.floor(Math.random()*6)+1
const diceNumber2 = "images/dice"+randomNumber2+".png"

document.querySelector(".img2").setAttribute("src",diceNumber2);

if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw"
}
else if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins"
}
else{
    document.querySelector("h1").innerHTML="Player 2 wins"
}
