// javascript.js linked to index.html
// MidTerm
// Revision History
//     Pedro Augusto Melo de Sampaio, 2022.02.25: Created

var error = "";
var output = "";
var total = 0;
var totalTax = 0;
function validateForm(){
    error = "";
    output = "";
    let name = document.forms["myForm"]["name"].value;
    if (name == ""){
        error += "Name is required!<br>";
    }
    let phone = document.forms["myForm"]["phone"].value;
    if (phone == ""){
        error += "Phone is required!<br>";
    }
    else if(!/([0-9]{3}-){2}[0-9]{4}/.test(phone)){
        error += "Your Phone Number is Invalid.<br>";
    }
    let email = document.forms["myForm"]["email"].value;
    if (email == ""){
        error += "Email is required!<br>";
    }
    let employment = document.forms["myForm"]["employment"].value;
    if (employment == ""){
        error += "Employment Income is required!<br>";
    }
    else if (/\D/.test(employment)){
        error += "Employment Income must be numbers only!<br>"
    }
    let other = document.forms["myForm"]["other"].value;
    if (/\D/.test(other)){
        error += "Other Income must be numbers only!<br>"
    }
    let paid = document.forms["myForm"]["paid"].value;
    if (paid == ""){
        error += "Income Taxes Paid is required!<br>";
    }
    else if (/\D/.test(paid)){
        error += "Income Taxes Paid must be numbers only!<br>"
    }
    if (other != ""){
        total = parseInt(employment) + parseInt(other);
    }
    else{
        total = parseInt(employment);
    }
    if (total < 60000){
        totalTax = 0.2*total;
    }
    else if (total >= 60000 && total < 90000){
        totalTax = 0.25*total;
    }
    else{
        totalTax = 0.34*total;
    }
    if (error == ""){
        output = "<p>Name: " + name + "</p>" + "<p>Phone: " + phone + "</p><p>Email: " + email + "</p>Total Income: $" + total +
        "</p><p>Total Income Tax: $" + totalTax + "</p><p>Income Taxes Paid: $" + paid + "</p><p>Income Taxes Payable: $" + (totalTax - parseInt(paid));
    }
    document.getElementById("error").innerHTML = error;
    document.getElementById("output").innerHTML = output;
}