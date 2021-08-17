let date = new Date();
let yourMessage = "Your visited this ";
let wasSentOn = "page on ";
function dateFunction() {
  document.getElementById("date").innerHTML = yourMessage + wasSentOn + date;
}

dateFunction();
