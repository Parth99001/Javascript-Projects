console.log("Hello");
let one;
let two;
function operator(){
    one = parseInt(document.getElementById("one").value);
    two = parseInt(document.getElementById("two").value);

    console.log(one);
    console.log(two);
}
function add(){
    operator();
    let ans = one+two;
    console.log(ans);
    document.getElementById("ans").value = ans
}
function min(){
    operator();
    let ans = one-two;
    console.log(ans);
    document.getElementById("ans").value = ans
}
function mul(){
    operator();
    let ans = one*two;
    console.log(ans);
    document.getElementById("ans").value = ans
}
function div(){
    operator();
    let ans = one/two;
    console.log(ans);
    document.getElementById("ans").value = ans
}