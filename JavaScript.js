
//console.log(number.innerHTML);

var calculate = function() {

let  number = document.querySelector('#NumberToCheck').value;

if(number % 2 == 0) {
    console.log("The number is even.");
}

else {
    console.log("The number is odd.");
} };


var Rounding = function() {
    
    let  number2 = document.querySelector('#NumberToCheck').value;
    console.log(Math.round(number2));
    
 };

 
//testtttt gggggg
function checkPalindrome() {

    let  string = document.querySelector('#StringToCheck').value;
    let  Palindrome = string.split("").reverse("").join("");

    if( string == Palindrome)
    console.log("palin");

    else
    console.log("Not palin");

}
