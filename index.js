var randomNumber1=Math.floor(Math.random()*6)+1;

var randomdiceimage="dice"+randomNumber1+".png";

var randomimagesource="images/"+randomdiceimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;

var randomdiceimage2="dice"+randomNumber2+".png";

var randomdicesource2="images/"+randomdiceimage2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomdicesource2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="🚩Player 1 Wins";
}
else if(randomNumber2 > randomNumber1){
  document.querySelector("h1").innerHTML="🚩Player 2 wins";
}
else{
  document.querySelector("h1").innerHTML="🚩It's a TIE🚩"
}
