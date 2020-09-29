function clear_all() {
    var confirmation=confirm("do you want reset all!!");
    if(confirmation){
        document.getElementById("name").value=" ";
        document.getElementById("surname").value=" ";
        document.getElementById("city").value=" ";

    }

  }