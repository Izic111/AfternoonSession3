document.getElementById("nstate").style.display = "none"
document.getElementById("astate").style.display = "none"

function showorhide(){
    var country = document.getElementById("country").value
    if (country === "Nigeria"){
    document.getElementById("nstate").style.display = "block"  
    document.getElementById ("astate").style.display ="none"
 }
 else if (country === "America"){
     document.getElementById("astate").style.display= "block"
     document.getElementById("nstate").style.display = "none"  
 }

}
