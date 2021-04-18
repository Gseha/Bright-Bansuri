function Submit(){
    var fname = document.getElementById("firstname");
    var lname = document.getElementById("lastname");
    var mail = document.getElementById("email");
    var rate = document.getElementById("Rating");
    var Ftext = document.getElementById("FeedBack")
    console.log(fname.value, lname.value, mail.value, rate.value, Ftext.value)
    alert("Thankyou "+fname.value+lname.value)
}