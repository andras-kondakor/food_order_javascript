
var direction;

function getdirection()
{
    return direction;
}

function setdirection(input)
{
    direction=input;
}

function validate(){

var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
var ownerlocation="owner.html";
var adminlocation="admin_foodlist.html";

if(username == "admin" && password == "admin"){
    alert ("Login successfully as admin");
    setdirection(adminlocation); // Redirecting to admin page.
    return true;
    }else if(username == "owner" && password == "boss"){
        alert ("Login successfully as owner");
        setdirection(ownerlocation);  // Redirecting to admin page.
        return true;
    }else{
        alert ("Invalid username or password");
        setdirection("#");
        return false;
    }

}