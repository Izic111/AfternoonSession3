function register(){
    var fullname = document.getElementById("fullname").value
    var email = document.getElementById("email").value
    var tel = document.getElementById("phone").value
    var password = document.getElementById("password").value
    var confirmpassword = document.getElementById("confirmpassword").value

    if(fullname === "" || email === "" || phone === "" || password === "" || confirmpassword === ""){
        document.getElementById("message").innerHTML= " input data" 
    }
    else if (password !== confirmpassword ){
        document.getElementById("message").innerHTML="password does not match"
    }
    else if (password.length < 4 || password.length > 8 ){
        document.getElementById("message").innerHTML= "password should be more than three and less than eight digits"

    }
    else if ( !fullname.match(/^[A-Za-z ]+$/)){
         document.getElementById("message").innerHTML=""
     }
     else if (!email.match(/\S+@\S+\.\S+/)){
        document.getElementById("message").innerHTML="corectly write your email add"

     }

     else{
         document.getElementById("message").innerHTML= "sucessful registration"
         window.location.href ="dashboard.html"

     }   
     
     }