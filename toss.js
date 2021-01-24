var randomNumber= Math.random();
randomNumber= randomNumber*2;
randomNumber=Math.floor(randomNumber)+1;
var coinImg= "img"+randomNumber+".jpeg";
var image= document.querySelectorAll("img")[0].setAttribute("src", coinImg);
if(randomNumber==1)
{
  document.querySelector("h2").innerHTML = "💲 Heads! 💲";
}
else if(randomNumber==2)
{
  document.querySelector("h2").innerHTML="💲 Tails! 💲";
}
