console.log("hello");
let one 
function first(){
    l1 = (document.getElementById("one"));
    i1 = (document.getElementById("email"));
    if (i1.value == "") {
        l1.style.top ="8px";
       
    } else {
        l1.style.top ="-5px"
         l1.style.fontsize="5%"
    }
}
function show() {
    let show = document.getElementById("sh");
    let hide = document.getElementById("hd");
    let password = document.getElementById("password");
    show.style.display="none";
    hide.style.display="block";
    password.type="text";
}
function hide() {
    let show = document.getElementById("sh");
    let hide = document.getElementById("hd");
    let password = document.getElementById("password");
    hide.style.display="none";
    show.style.display="block";
    password.type="password";
}
let two;
function lab() {
    l1 = (document.getElementById("two"));
    i1 = (document.getElementById("password"));
    if (i1.value == "") {
        l1.style.top ="8px";
       
    } else {
        l1.style.top ="-5px"
         l1.style.fontsize="5%"
    }

}