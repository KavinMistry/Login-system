function output()   {
    var empty = ""
    var space = " "
    var user = document.getElementById("Username").value
    var pass = document.getElementById("Password").value
    var conPass = document.getElementById("confirmpass").value

    if(user == empty){
        alert(" Invalid Username ")
    }
    else if(user == space){
        alert(" Invalid Username ")
    }
    else if(pass !== conPass) {
        alert(" Passwords do not match ")
    }
    else {
        alert(" Successfully signed up ");
    }
}

function output1() {
    var empty = ""
    var space = " "
    var user = document.getElementById("Username1").value

    if(user == empty){
        alert(" Invalid Username ")
    }
    else if(user == space){
        alert(" Invalid Username ")
    }
}

function hover() {
    document.getElementById("button").style.backgroundColor = "#696969"
}

function hoveroff() {
    document.getElementById("button").style.backgroundColor = "black"
}
function save() {
var user = document.getElementById("Username").value
var pass = document.getElementById("Password").value

localStorage.setItem("user",JSON.stringify(user_record))
localStorage.setItem("pass",JSON.stringify(user_record))
}

function check () {
let user_record = new Array();
user_record = JSON.parse(localStorage.getItem("user")) ? JSON.parse(localStorage.getItem("pass")):[]
if(user_record.some((v) =>  {return user.value==Username && pass.value==Password }))
{
    alert(" Successfully logged in ")
}
else
{
    alert(" Incorrect Username or Password ")
}
}