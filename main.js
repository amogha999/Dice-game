var a=Math.random();
var b= (a*6)+1;
var c=Math.floor(b);
var randomimage=("dice"+c+".png");
var imagge=document.querySelectorAll("img")[0];
imagge.setAttribute("src",randomimage);
var d=Math.random();
var e=(d*6)+1;
var f=Math.floor(e);
var randomimage1=("dice"+f+".png");
var imaggge=document.querySelectorAll("img")[1];
imaggge.setAttribute("src",randomimage1);
if(b>e){
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(e>b){
    document.querySelector("h1").innerHTML="Player 2 wins";
}
else{
    document.querySelector("h1").innerHTML="Match has been Drawn";
}
