document.querySelector("#menu").addEventListener("click",function(){
    document.querySelector(".menupage").style.left = "0vh";

})
document.querySelector("#menu1").addEventListener("click",function(){
    document.querySelector(".menupage").style.left = "-50%";

})



var flag= 0;
document.querySelector("#a").addEventListener("click",function(){
 if(flag == 0){
    document.querySelector(".digga1").style.left = "10%";
    document.querySelector(".digga1").style.height = "130px";
    // document.querySelector(".dibba1").style.display = "block";
    
  flag= 1
 }
 else{
    document.querySelector(".digga1").style.left = "-100%";
    document.querySelector(".digga1").style.height = "0px";
    // document.querySelector(".dibba1").style.display = "block";
  flag =0
 }
})
/////////////////////

var flag= 0;
document.querySelector("#b").addEventListener("click",function(){
 if(flag == 0){
    document.querySelector(".digga2").style.left = "10%";
    document.querySelector(".digga2").style.height = "70px";
  flag= 1
 }
 else{
    document.querySelector(".digga2").style.left = "-100%";
    document.querySelector(".digga2").style.height = "0px";
  flag =0
 }
})
//////////////////////////

var flag= 0;
document.querySelector("#c").addEventListener("click",function(){
 if(flag == 0){
    document.querySelector(".digga3").style.left = "10%";
    document.querySelector(".digga3").style.height = "240px";
    
  flag= 1
 }
 else{
    document.querySelector(".digga3").style.left = "-100%";
    document.querySelector(".digga3").style.height = "0px";
    
  flag =0
 }
})

//////////////////////////////////
var flag= 0;
document.querySelector("#d").addEventListener("click",function(){
 if(flag == 0){
    document.querySelector(".digga4").style.left = "10%";
    document.querySelector(".digga4").style.height = "240px";
    
  flag= 1
 }
 else{
    document.querySelector(".digga4").style.left = "-100%";
    document.querySelector(".digga4").style.height = "0px";
  flag =0
 }
})
///////////////////////////

var flag= 0;
document.querySelector("#e").addEventListener("click",function(){
 if(flag == 0){
    document.querySelector(".digga5").style.left = "10%";
    document.querySelector(".digga5").style.height = "60px";
    
  flag= 1
 }
 else{
    document.querySelector(".digga5").style.left = "-100%";
    document.querySelector(".digga5").style.height = "0px";
  flag =0
 }
})
////////////////////////////

var flag= 0;
document.querySelector("#f").addEventListener("click",function(){
 if(flag == 0){
    document.querySelector(".digga6").style.left = "10%";
    document.querySelector(".digga6").style.height = "220px";
    
  flag= 1
 }
 else{
    document.querySelector(".digga6").style.left = "-100%";
    document.querySelector(".digga6").style.height = "0px";
  flag =0
 }
})