function daterefresh(){
    let seconds = 1000
    let timeout = setTimeout("displaydate()", seconds )

}
function displaydate(){
    let date = new Date()
    document.getElementById("date").innerHTML =  date
    daterefresh()
}