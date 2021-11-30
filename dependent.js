document.getElementById("jambscore").style.display ="none"

function showorhide(){
    var jambstatus = document.getElementById("jambstatus").value
    if (jambstatus === "yes"){
    document.getElementById("jambscore").style.display ="block"
    }
    else {
        document.getElementById("jambscore").style.display ="none"
    }
    
}

   