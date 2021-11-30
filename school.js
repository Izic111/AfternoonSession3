var check = () => {
    var pay = document.getElementById("pay").value
    var fees = 50000
    if (pay == fees){
        document.getElementById("message").innerHTML = "payment complete"
    }
   else if( pay < fees && pay > 0){
    var remain = Number(fees) - Number(pay)
       document.getElementById("message").innerHTML = ("payment incomplete you owe " + remain)
     
   }

   else if(pay > fees){
    var exceeds = Number(pay) - Number(fees)
       document.getElementById("message").innerHTML = "payment exceed's requirement by " + exceeds

   } 
   else {
       document.getElementById("message").innerHTML = "input a valid amount paid" 
   }
}
