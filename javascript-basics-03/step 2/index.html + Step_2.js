function ShowHide(){
    var hide =document.getElementById("hide")
    hide.onclick=function () {
        document.getElementById("texte").style.display="none";
        
    }
    
   var show=document.getElementById("show")
   show.onclick=function () {
       document.getElementById("texte").style.display="block";
       
   }
 

}