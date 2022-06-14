var num1 = Math.floor(Math.random()*6)+1;
var randice = "dice" + num1 + ".png";
var ranimgsource =  randice;
document.querySelectorAll("img")[0].setAttribute("src",ranimgsource);
// img1.setAttribute("src",ranimgsource);
var num2 = Math.floor(Math.random()*6)+1;
var randice2 = "dice" + num2 + ".png";
var ranimgsource2 = randice2;
document.querySelector(".img2").setAttribute("src",ranimgsource2);
if(randice>randice2)
{
    document.querySelector("h1").innerHTML="🚩Play 1 wins."
}
else if(randice2>randice)
{
    document.querySelector("h1").innerHTML="Play 2 wins.🚩"
}
else
{
    document.querySelector("h1").innerHTML="It's a tie."
}