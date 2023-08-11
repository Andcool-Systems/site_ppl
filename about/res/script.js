
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "navig") {
        x.className += " responsive";
    } else {
        x.className = "navig";
    }
}
