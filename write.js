function check(){
    var sickness = document.getElementById("sickness").value
    if (sickness === "headache"){
        document.getElementById("drugs").innerHTML = "try go see doctor"
    }
    else if (sickness === "stormache pain"){
        document.getElementById("drugs").innerHTML = "drink water"
    }
    else if (sickness === "dizziness"){
        document.getElementById("drugs").innerHTML = "try sleep comrade"
    }
    else {
        document.getElementById("drugs").innerHTML = "put sickness weh we sabi"
    }
}