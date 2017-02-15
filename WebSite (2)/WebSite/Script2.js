
// number handling and meter tag
var val = document.getElementById("val");
var mtr = document.getElementById("mtr");
var num = document.getElementById("num").value;

val.innerHTML = num;
mtr.value = num/100;

var run = function(numval) {
    val.innerHTML = numval;
    mtr.value = numval/100;
}
// email input handler:
var email = document.getElementById("mail");
email.addEventListener("keyup", function (event) {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("This requires an email address!");
    } else {
        email.setCustomValidity("");
    }
});

// date handler
var dat = document.getElementById("dat");
var udt = document.getElementById("udt");
dat.addEventListener("change", function (event) {
    udt.innerHTML = dat.value;
});
