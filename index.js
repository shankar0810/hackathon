
var maintext = document.getElementById("maintext");
var submitbtn = document.getElementById("submitbtn");

function submitclick()
{
    var ref = firebase.database().ref();
    ref.child("sometext").set("somevalue");
}