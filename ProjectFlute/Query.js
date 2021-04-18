
function Submit(){
    var fname = document.getElementById("firstname");
    var lname = document.getElementById("lastname");
    var mail = document.getElementById("email");
    var query = document.getElementById("Query Type");
    var Qtext = document.getElementById("querytxt")
    console.log( fname.value, lname.value, query.value, email.value, Qtext.value)
    alert("Thankyou "+fname.value+lname.value)

}

    
    