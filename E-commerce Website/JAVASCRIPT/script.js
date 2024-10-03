let a = document.getElementById("fname");
let b = document.getElementById("mail");
let c = document.getElementById("sub");
let d = document.getElementById("sug");
function check() {
    if(a.value==""){
        alert("Please Enter Your Name");
    }else if(b.value==""){
        alert("Please Enter Your Mail");
    }else if(c.value==""){
        alert("Please Enter Your Subject");
    }else if(d.value==""){
        alert("Please Enter Your Sugestion or Message");
    }else{
        alert("Thanks for Your Responce");
    }
}