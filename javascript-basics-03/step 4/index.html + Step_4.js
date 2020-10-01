function valid() {
    var pass =document.getElementById("password").value;
    var conf =document.getElementById("confirmation").value;
    if (pass!=conf){
        document.getElementById("password").style.borderColor="red";
        document.getElementById("confirmation").style.borderColor="red";

    }


    
}