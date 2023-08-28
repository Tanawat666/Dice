let num1 = 0;
let num2 = 0;
let num3 = 0;
let DE = ["img/D1.png","img/D2.png","img/D3.png","img/D4.png","img/D5.png","img/D6.png",]
function BN(){
   num1 = Math.floor(Math.random() * 6);
   num2 = Math.floor(Math.random() * 6);
   num3 = Math.floor(Math.random() * 6);
   document.getElementById("R1").src = DE[num1];
   document.getElementById("R2").src = DE[num2];
   document.getElementById("R3").src = DE[num3];
}