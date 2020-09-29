function ShowHide(){
    var show=document.getElementById("hide")
    show.onclick=function () {
        document.getElementById("texte").style.display="none";
        
    }
    
   var hide=document.getElementById("show")
   hide.onclick=function () {
       document.getElementById("texte").style.display="block";
       
   }
 

}