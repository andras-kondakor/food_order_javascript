function validate(){

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var ownerlocation="owner.html";
var adminlocation="admin_foodlist.html";

if(username == "admin" && password == "admin"){
    alert ("Login successfully as admin");
    window.location=adminlocation; // Redirecting to admin page.
    return false;
    }else if(username == "owner" && password == "boss"){
        alert ("Login successfully as owner");
        window.location=ownerlocation;  // Redirecting to admin page.
        return false;
    }else{
        alert ("Invalid username or password");
    }

}