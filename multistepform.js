console.log("its working")
var form1=document.getElementById("form1")
var form2=document.getElementById("form2")
var form3=document.getElementById("form3")

 var Next1=document.getElementById("Next1")
 var Next2=document.getElementById("Next2")
 var Back1=document.getElementById("Back1")
 var Back2=document.getElementById("Back2")
 var progress=document.getElementById("progress");
 
function  Next11(){
     console.log("Next11 is grabbed")
     form1.style.left="-450px";
     form2.style.left="40px";

 }
 Next1.onclick=function(){
    console.log("Next11 is grabbed")
    form1.style.left="-450px";
    form2.style.left="40px";
    progress.style.left="120px";

 }
 
 
 Back1.onclick=function(){

    console.log("Back1 is grabbed")
    form1.style.left="40px";
    form2.style.left="450px";
    progress.style.left="0px";
 }
 Next2.onclick=function(){
     form2.style.left="-450px";
     form3.style.left="40px"
     progress.style.left="240px";
 }
 Back2.onclick=function(){
    form2.style.left="40px";
    form3.style.left="450px"
    progress.style.left="120px";
}

