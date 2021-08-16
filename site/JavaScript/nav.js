/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// This substitutes the empty navHTML class Tag with the inner html
const nav = document.querySelector(".navHTML");

const navBar = document.createElement("nav");

navBar.innerHTML =
  '<div class="topnav" id="myTopnav"> <a href="/index.html" class="active"><i class="fa fa-fw fa-home"></i>Home</a> <a href="/news.html">News</a> <a href="#contact"><i class="fa fa-fw fa-envelope"></i></i>Contact</a> <a href="#about">About</a> <a href="javascript:void(0);" class="icon" onclick="myFunction()"> <i class="fa fa-bars"></i> </a> </div><br><br>';
nav.parentNode.replaceChild(navBar, nav);
