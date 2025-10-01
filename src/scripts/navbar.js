// Hiervan moet je afblijven tenzij je weet wat je aan het doen bent


// Als de gebruiker op het hamburgermenu icoon klikt, toon of verberg de navigatielinks
function hamburgerMenu() {
  let x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = null;
  } else {
    x.style.display = "block";
  }
}

/*
<nav id="navbar">
<img class="hamburger" src="hamburger.png" onclick="hamburgerMenu()"/>
<script src="navbar.js"></script>
*/
